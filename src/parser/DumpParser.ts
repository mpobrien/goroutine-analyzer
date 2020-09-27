const startPattern = /^goroutine\s+(\d+)\s+\[([^,]*)(?:, (\d+) minutes)?\]:$/;

type GroupInfo = {
  countByState: {
    [key: string]: number;
  };
};

export type Filter = {
  states: Set<string>;
};

export type StateCountSummary = {
  countByState: {[state: string]: number};
  total: number;
  numGroups: number;
};

export enum MatchType {
  MustContainSubstring = 'contains',
  MustNotContainSubstring = 'notcontains',
}

export class TextFilter {
  matchType: MatchType;
  matchStr: string;

  constructor(matchType: MatchType, matchStr: string) {
    this.matchType = matchType;
    this.matchStr = matchStr;
  }

  withMatchType(matchType: MatchType): TextFilter {
    return new TextFilter(matchType, this.matchStr);
  }

  withMatchStr(matchStr: string): TextFilter {
    return new TextFilter(this.matchType, matchStr);
  }

  match(lines: string[]): boolean {
    let contained = lines.some(l => l.indexOf(this.matchStr) >= 0);
    if (this.matchType === MatchType.MustContainSubstring) {
      return contained;
    }
    return !contained;
  }
}

export const makeSummary = (gs: Goroutine[]): StateCountSummary => {
  let counts: {[state: string]: number} = {};
  let total = 0;
  for (let i = 0; i < gs.length; i++) {
    total += gs[i].count;
    if (gs[i] instanceof SingleGoroutine) {
      counts[gs[i].state] = (counts[gs[i].state] || 0) + 1;
      continue;
    }
    if (gs[i] instanceof GoroutineGroup) {
      const gg = gs[i] as GoroutineGroup;
      for (let j = 0; j < gg.goroutines.length; j++) {
        counts[gg.goroutines[j].state] =
          (counts[gg.goroutines[j].state] || 0) + 1;
      }
    }
  }
  return {
    total: total,
    countByState: counts,
    numGroups: gs.length,
  };
};

export class GoroutineGroup {
  goroutines: SingleGoroutine[];
  cachedState?: string;
  cachedTime?: number;
  constructor(goroutines: SingleGoroutine[]) {
    this.goroutines = goroutines;
  }
  matches(f: Filter, textFilters: TextFilter[]): boolean {
    if (this.cachedState && f.states.has(this.cachedState)) {
      return (
        textFilters.length === 0 ||
        textFilters.every(f => f.match(this.goroutines[0].lines))
      );
    }
    for (let i = 0; i < this.goroutines.length; i++) {
      if (f.states.has(this.goroutines[i].state)) {
        return (
          textFilters.length === 0 ||
          textFilters.every(f => f.match(this.goroutines[0].lines))
        );
      }
    }
    return false;
  }
  get states(): string[] {
    const statesCount = {};
    for (let i = 0; i < this.goroutines.length; i++) {
      statesCount[this.goroutines[i].state] =
        (statesCount[this.goroutines[i].state] || 0) + 1;
    }
    return Object.keys(statesCount);
  }
  get lines(): string[] {
    return this.goroutines[0].lines;
  }
  get id(): number {
    return 0;
  }
  get key(): number {
    return this.goroutines[0].key;
  }
  get count(): number {
    return this.goroutines.length;
  }
  get timeMinutes(): number {
    return this.goroutines[0].timeMinutes;
  }

  get state(): string {
    if (!this.cachedState) {
      const statesCount = {};
      for (let i = 0; i < this.goroutines.length; i++) {
        statesCount[this.goroutines[i].state] =
          (statesCount[this.goroutines[i].state] || 0) + 1;
      }
      if (Object.keys(statesCount).length === 1) {
        this.cachedState = Object.keys(statesCount)[0];
      } else {
        let desc = [];
        for (const k in statesCount) {
          desc.push(statesCount[k] + ' ' + k);
        }
        this.cachedState = desc.join(',\n');
      }
    }
    return this.cachedState;
  }
}

export class SingleGoroutine {
  id: number;
  state: string;
  timeMinutes: number;
  lines: string[] = [];
  hash: number = 0;
  constructor(id: number, state: string, timeMinutes: number) {
    this.id = id;
    this.state = state;
    this.timeMinutes = timeMinutes;
  }
  addLine(line: string) {
    this.lines.push(line);
  }
  get count(): number {
    return 1;
  }

  get states(): string[] {
    return [this.state];
  }

  matches(f: Filter, textFilters: TextFilter[]): boolean {
    if (!f.states.has(this.state)) {
      return false;
    }
    return (
      textFilters.length === 0 || textFilters.every(f => f.match(this.lines))
    );
  }

  get key(): number {
    return this.id;
  }

  done() {
    const hashLines = this.lines
      .map(line => {
        if (line.startsWith('\t')) {
          const s = line.trim().split(' ');
          if (s.length !== 2) {
            return null;
          }
          return s[0];
        }
        return null;
      })
      .filter(l => l);
    this.hash = hash(hashLines.join(''));
  }
}

const hash = (s: string) => {
  var hash = 0;
  if (s.length === 0) {
    return hash;
  }
  for (var i = 0; i < s.length; i++) {
    var char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export type Goroutine = SingleGoroutine | GoroutineGroup;

export function parseGoroutines(text: string): Goroutine[] {
  let hashes: {[key: number]: SingleGoroutine[]} = {};
  const splitText = text.split(/\r?\n/);
  let curGoroutine: SingleGoroutine | null = null;
  for (let i = 0; i < splitText.length; i++) {
    const line = splitText[i];
    if (line === '') {
      if (curGoroutine) {
        curGoroutine.done();
        if (curGoroutine.hash !== 0) {
          if (hashes[curGoroutine.hash]) {
            hashes[curGoroutine.hash].push(curGoroutine);
          } else {
            hashes[curGoroutine.hash] = [curGoroutine];
          }
        }
        curGoroutine = null;
      }
      continue;
    }
    const match = startPattern.exec(line);
    if (curGoroutine && !match) {
      curGoroutine!.addLine(line);
    }
    if (match) {
      curGoroutine = new SingleGoroutine(
        parseInt(match[1]), // id
        match[2], // state
        match[3] ? parseInt(match[3]) : 0, // time, if specified
      );
    }
  }
  let out: Goroutine[] = [];
  for (const k in hashes) {
    if (hashes[k].length === 1) {
      out.push(hashes[k][0]);
    } else if (hashes[k].length > 1) {
      out.push(new GoroutineGroup(hashes[k]));
    }
  }
  return out;
}
