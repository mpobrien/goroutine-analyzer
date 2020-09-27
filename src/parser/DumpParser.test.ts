import {Readable} from 'stream';
import {parseGoroutines, SingleGoroutine, GoroutineGroup} from './DumpParser';
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

test('goroutine parsing', async () => {
  const input = `
goroutine 11044395 [running]:
github.com/10gen/stitch/utils.stacktraceAllGoroutines(0x0, 0x3aab0b7)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:321 +0x9d
github.com/10gen/stitch/utils.DumpAllGoroutinesBecause(0xc013c37c50, 0x2a)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:307 +0x5d
main.main.func6()
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/cmd/server/main.go:231 +0x135
github.com/10gen/stitch/utils.PanicCapturingGo.func1(0xc0161ad920)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:163 +0x4d
created by github.com/10gen/stitch/utils.PanicCapturingGo
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:156 +0x3f

goroutine 1 [semacquire, 2 minutes]:
sync.runtime_SemacquireMutex(0xc0004c7100, 0x0, 0x1)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/runtime/sema.go:71 +0x47
sync.(*Mutex).lockSlow(0xc0004c70fc)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/sync/mutex.go:138 +0xfc
sync.(*Mutex).Lock(...)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/sync/mutex.go:81
sync.(*Once).doSlow(0xc0004c70f8, 0xc006105868)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/sync/once.go:62 +0x122
sync.(*Once).Do(...)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/sync/once.go:57
github.com/10gen/stitch/api/client/server.(*Server).SignalShutdown(0xc0004c6e00)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/api/client/server/server.go:680 +0x6a
github.com/10gen/stitch/api/client/server.(*Server).Close(0xc0004c6e00)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/api/client/server/server.go:709 +0x43
main.main()
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/cmd/server/main.go:269 +0xb92

goroutine 5 [syscall, 2 minutes]:
os/signal.signal_recv(0x40d6ea0)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/runtime/sigqueue.go:147 +0x9c
os/signal.loop()
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/os/signal/signal_unix.go:23 +0x22
created by os/signal.init.0
	/data/mci/eaa41753794711606c0d4f8bb56e480b/go/src/os/signal/signal_unix.go:29 +0x41

goroutine 11052961 [select]:
go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).update(0xc0381606e0)
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:420 +0x465
created by go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:175 +0x121

goroutine 1985 [chan receive, 299 minutes]:
github.com/10gen/stitch/events/synctranslator.(*exponentialIntervalTimer).Disarm(0xc0164417d0)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/events/synctranslator/integrator_coordinator.go:134 +0x14e
github.com/10gen/stitch/events/synctranslator.(*integratorCoordinator).HeartbeatLoop(0xc0163c1080, 0x4103720, 0xc016406880)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/events/synctranslator/integrator_coordinator.go:332 +0x232
github.com/10gen/stitch/events/synctranslator.(*integratorCoordinator).StartHeartbeatLoop.func1()
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/events/synctranslator/integrator_coordinator.go:273 +0x45
github.com/10gen/stitch/utils.PanicCapturingGo.func1(0xc016441b30)
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:163 +0x4d
created by github.com/10gen/stitch/utils.PanicCapturingGo
	/data/mci/eaa41753794711606c0d4f8bb56e480b/stitch/utils/utils.go:156 +0x3f

goroutine 666 [select]:
go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).update(0xc0381606e0)
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:420 +0x465
created by go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:175 +0x121

goroutine 777 [select]:
go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).update(0xc0381606e0)
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:420 +0x465
created by go.mongodb.org/mongo-driver/x/mongo/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/edaniels/mongo-go-driver@v1.3.3-0.20200622222236-b247fc5f8705/x/mongo/driver/topology/server.go:175 +0x121



`;

  const parsed = parseGoroutines(input);

  expect(parsed).toHaveLength(5);

  parsed.sort((a, b) => {
    if (a instanceof SingleGoroutine && b instanceof SingleGoroutine) {
      return a.id - b.id;
    }
    return a instanceof SingleGoroutine ? -1 : 1;
  });
  expect(parsed[0] instanceof SingleGoroutine).toBe(true);
  expect(parsed[0].id).toBe(1);
  expect(parsed[0].timeMinutes).toBe(2);
  expect(parsed[0].state).toBe('semacquire');
  expect(parsed[0].lines).toHaveLength(16);

  expect(parsed[1] instanceof SingleGoroutine).toBe(true);
  expect(parsed[1].id).toBe(5);
  expect(parsed[1].timeMinutes).toBe(2);
  expect(parsed[1].state).toBe('syscall');
  expect(parsed[1].lines).toHaveLength(6);

  expect(parsed[2] instanceof SingleGoroutine).toBe(true);
  expect(parsed[2].id).toBe(1985);
  expect(parsed[2].timeMinutes).toBe(299);
  expect(parsed[2].state).toBe('chan receive');
  expect(parsed[2].lines).toHaveLength(10);

  expect(parsed[3].id).toBe(11044395);
  expect(parsed[3].state).toBe('running');
  expect(parsed[3].timeMinutes).toBe(0);
  expect(parsed[3].lines).toHaveLength(10);

  expect(parsed[4] instanceof GoroutineGroup).toBe(true);
  expect(parsed[4].goroutines.length).toBe(3);
  expect(parsed[4].goroutines[0].id).toBe(11052961);
  expect(parsed[4].goroutines[1].id).toBe(666);
  expect(parsed[4].goroutines[2].id).toBe(777);
});
