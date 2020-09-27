import React, {useState} from 'react';

import './App.css';
import {useDropzone} from 'react-dropzone';
import {
  Goroutine,
  Filter,
  parseGoroutines,
  makeSummary,
  StateCountSummary,
  TextFilter,
  MatchType,
} from './parser/DumpParser';
import GoroutineTable from './GoroutineTable';
import './GoroutineFilter.css';
import gopher from './gopher-dance-long-3x.gif';
import github from './GitHub-Mark-32px.png';
import sample from './sample';

function GoroutineFilterPicker(props: {
  filter: Filter;
  setFilter: (f: Filter) => void;
  summary: StateCountSummary;
}) {
  const toggle = (s: string) => {
    let fcopy = new Set(props.filter.states);
    if (fcopy.has(s)) {
      fcopy.delete(s);
    } else {
      fcopy.add(s);
    }
    props.setFilter({states: fcopy});
  };
  let states = Object.keys(props.summary.countByState).sort();
  return (
    <div className="filter">
      <strong>
        Filter {props.summary.total} goroutines in {props.summary.numGroups}{' '}
        groups
      </strong>
      {states.map((s: string) => (
        <div key={s}>
          <label>
            <input
              type="checkbox"
              checked={props.filter.states.has(s)}
              onChange={() => {
                toggle(s);
              }}></input>
            {s} (<b>{props.summary.countByState[s]}</b>)
          </label>
        </div>
      ))}
    </div>
  );
}

function Loading(props: {loading: boolean}) {
  return props.loading ? (
    <div className="loading-wrapper">
      <img src={gopher} alt="loading" />
      <div className="loading">loading</div>
    </div>
  ) : null;
}

const makeFilter = (g: Goroutine[]): Filter => {
  let s = makeSummary(g);
  return {
    states: new Set(Object.keys(s.countByState)),
  };
};

function App() {
  const [goroutines, setGoroutines] = useState<Goroutine[]>([]);
  const [filter, setFilter] = useState<Filter>({states: new Set<string>()});
  const [textFilters, setTextFilters] = useState<TextFilter[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const onDrop = (acceptedFiles: File[]) => {
    setLoading(true);
    if (acceptedFiles.length === 0) {
      return;
    }
    const f: File = acceptedFiles[0];
    const fr = new FileReader();
    fr.onload = function() {
      if (fr.result != null) {
        let parsed = parseGoroutines(fr.result as string);

        setTimeout(() => {
          setFilter(makeFilter(parsed));
          setLoading(false);
          setGoroutines(parsed);
        }, 300);
      }
    };
    fr.onerror = function() {
      console.error('loading failed', fr.error);
    };
    fr.readAsText(f);
  };

  const loadDemo = () => {
    setLoading(true);
    let parsed = parseGoroutines(sample);
    setTimeout(() => {
      setFilter(makeFilter(parsed));
      setLoading(false);
      setGoroutines(parsed);
    }, 600);
  };

  let summary = makeSummary(goroutines);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <div className="App">
      <Loading loading={loading || false} />
      {goroutines.length === 0 && !loading && (
        <div className="dropTarget" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            'Drop the files here ...'
          ) : (
            <>
              <div className="dropTargetCopy">
                Drop a file containing a Go stack dump.
              </div>
              <div className="dropTargetCopy">Or click to choose a file.</div>
            </>
          )}
        </div>
      )}
      <div className="filterGroup">
        {goroutines.length > 0 && !loading && (
          <GoroutineFilterPicker
            summary={summary}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        {goroutines.length > 0 && !loading && (
          <TextMatchers applyFilters={setTextFilters} />
        )}
      </div>
      <div>
        {goroutines.length > 0 && (
          <GoroutineTable
            goroutines={goroutines}
            filter={filter}
            textFilters={textFilters}
          />
        )}
      </div>
      {goroutines.length === 0 && !loading && (
        <div className="disclaimer">
          Or,{' '}
          <button onClick={loadDemo} className="link-button">
            load a demo file
          </button>
        </div>
      )}

      {goroutines.length === 0 && !loading && (
        <div className="disclaimer">
          All data is processed client-side. No data is ever stored, or sent
          over the network.
        </div>
      )}
      <p />
      {!loading && (
        <div className="disclaimer">
          <img src={github} alt="github logo" />
          &nbsp;&nbsp;
          <a href="https://github.com/mpobrien/goroutine-analyzer">
            README and Source on Github
          </a>
        </div>
      )}
    </div>
  );
}

function TextMatchers(props: {applyFilters: (f: TextFilter[]) => void}) {
  const [textFilters, setTextFilters] = useState<TextFilter[]>([]);
  const [dirty, setDirty] = useState<boolean>(false);
  const apply = () => {
    setDirty(false);
    props.applyFilters(textFilters);
  };

  return (
    <div className="filter">
      <button
        className="link-button"
        onClick={() => {
          setDirty(true);
          setTextFilters([
            ...textFilters,
            new TextFilter(MatchType.MustContainSubstring, ''),
          ]);
        }}>
        add a text match filter...
      </button>
      {textFilters.map((f, i) => (
        <div>
          <input
            type="text"
            placeholder="match substring"
            onKeyDown={e => {
              if (e.key === 'Enter') {
                apply();
              }
            }}
            className="substringMatch"
            onChange={e => {
              setDirty(true);
              setTextFilters(
                textFilters.map((f, j) =>
                  i !== j
                    ? f
                    : f.withMatchStr(
                        (e.target as HTMLInputElement).value as string,
                      ),
                ),
              );
            }}
          />
          <select
            onChange={e => {
              setDirty(true);
              setTextFilters(
                textFilters.map((f, j) =>
                  i !== j
                    ? f
                    : f.withMatchType(
                        (e.target as HTMLSelectElement).value as MatchType,
                      ),
                ),
              );
            }}>
            <option
              value={MatchType.MustContainSubstring as string}
              selected={f.matchType === MatchType.MustContainSubstring}>
              must appear in stacktrace
            </option>
            <option
              value={MatchType.MustNotContainSubstring as string}
              selected={f.matchType === MatchType.MustNotContainSubstring}>
              must NOT appear in stacktrace
            </option>
          </select>
          <button
            onClick={() => {
              setDirty(true);
              setTextFilters(textFilters.filter((f, j) => i !== j));
            }}>
            remove
          </button>
        </div>
      ))}
      {dirty && (
        <div>
          <button onClick={apply}>apply</button>
        </div>
      )}
    </div>
  );
}
export default App;
