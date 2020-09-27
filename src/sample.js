export default `
goroutine 516580623 [running]:
runtime/pprof.writeGoroutineStacks(0x41f6160, 0xc1e9a32620, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/pprof/pprof.go:679 +0x9d
runtime/pprof.writeGoroutine(0x41f6160, 0xc1e9a32620, 0x2, 0x8bce07f5, 0x15ab175)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/pprof/pprof.go:668 +0x44
runtime/pprof.(*Profile).WriteTo(0x58dda40, 0x41f6160, 0xc1e9a32620, 0x2, 0xc1e9a32620, 0x41243f0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/pprof/pprof.go:329 +0x3da
net/http/pprof.handler.ServeHTTP(0xc1106a22b1, 0x9, 0x4234a20, 0xc1e9a32620, 0xc17ed85600)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/pprof/pprof.go:245 +0x33a
net/http/pprof.Index(0x4234a20, 0xc1e9a32620, 0xc17ed85600)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/pprof/pprof.go:268 +0x6f1
net/http.HandlerFunc.ServeHTTP(0x3cc6f30, 0x4234a20, 0xc1e9a32620, 0xc17ed85600)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2007 +0x44
net/http.(*ServeMux).ServeHTTP(0x59540a0, 0x4234a20, 0xc1e9a32620, 0xc17ed85600)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2387 +0x1bd
net/http.serverHandler.ServeHTTP(0xc0016d02a0, 0x4234a20, 0xc1e9a32620, 0xc17ed85600)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2802 +0xa4
net/http.(*conn).serve(0xc1f05a8aa0, 0x424bba0, 0xc1f0946180)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:1890 +0x875
created by net/http.(*Server).Serve
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2928 +0x384

goroutine 1 [chan receive, 6774 minutes]:
main.main()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/cmd/server/main.go:244 +0x991

goroutine 5 [syscall, 6774 minutes]:
os/signal.signal_recv(0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/sigqueue.go:147 +0x9c
os/signal.loop()
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/os/signal/signal_unix.go:23 +0x22
created by os/signal.init.0
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/os/signal/signal_unix.go:29 +0x41

goroutine 101235 [syscall, 62 minutes]:
os/signal.signal_recv(0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/sigqueue.go:147 +0x9c
os/signal.loop()
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/os/signal/signal_unix.go:23 +0x22
created by os/signal.init.0
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/os/signal/signal_unix.go:29 +0x41

goroutine 98265 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc01b994d10)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 512 [chan receive, 6774 minutes]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handleWorker(0xc005422000, 0xc001732880)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:139 +0x1bb
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016fe060, 0xc00115a4b0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 533 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc0017803f0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0015499b0, 0xc0015499e0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 217 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053cfd0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 135 [select]:
github.com/ufo-nz/pxrbng/events.(*utilizationManager).manage(0xc000164fa0, 0xc005d8ef60)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utilization_manager.go:131 +0x7b6
github.com/ufo-nz/pxrbng/events.(*utilizationManager).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utilization_manager.go:213 +0x51
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc00091aa20, 0xc00163e080)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 511 [chan receive, 6774 minutes]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handleWorker(0xc005422000, 0xc001732860)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:139 +0x1bb
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016fe040, 0xc00115a480)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 303 [IO wait]:
internal/poll.runtime_pollWait(0x7fd9b1294b68, 0x72, 0xffffffffffffffff)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/netpoll.go:184 +0x55
internal/poll.(*pollDesc).wait(0xc0009ad618, 0x72, 0x1000, 0x1000, 0xffffffffffffffff)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:87 +0x45
internal/poll.(*pollDesc).waitRead(...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:92
internal/poll.(*FD).Read(0xc0009ad600, 0xc00132f000, 0x1000, 0x1000, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_unix.go:169 +0x1cf
net.(*netFD).Read(0xc0009ad600, 0xc00132f000, 0x1000, 0x1000, 0x0, 0xc173005808, 0x1a8b3cb)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/fd_unix.go:202 +0x4f
net.(*conn).Read(0xc00025c080, 0xc00132f000, 0x1000, 0x1000, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/net.go:184 +0x68
net/http.(*connReader).Read(0xc00161d440, 0xc00132f000, 0x1000, 0x1000, 0xc000aae550, 0x1, 0x4d4a400001000)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:785 +0xf4
bufio.(*Reader).fill(0xc0038ff620)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:100 +0x103
bufio.(*Reader).ReadSlice(0xc0038ff620, 0xa, 0x7fd9702219a0, 0xc1730059a8, 0x1595d46, 0xc0aced1200, 0x100)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:359 +0x3d
bufio.(*Reader).ReadLine(0xc0038ff620, 0xc1730059b0, 0xc0162e3c00, 0x7fd9b13346d0, 0x0, 0x1, 0xc1730059f0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:388 +0x34
net/textproto.(*Reader).readLineSlice(0xc1af2aa4b0, 0xc0aced1200, 0xc0009ad600, 0x0, 0x0, 0x15bbc6c)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/textproto/reader.go:57 +0x6c
net/textproto.(*Reader).ReadLine(...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/textproto/reader.go:38
net/http.readRequest(0xc0038ff620, 0x0, 0xc0aced1200, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/request.go:1012 +0x92
net/http.(*conn).readRequest(0xc0019b6000, 0x424bba0, 0xc00390a480, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:965 +0x15f
net/http.(*conn).serve(0xc0019b6000, 0x424bba0, 0xc00390a480)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:1817 +0x6d4
created by net/http.(*Server).Serve
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2928 +0x384

goroutine 510 [chan receive, 6774 minutes]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handleWorker(0xc005422000, 0xc001732840)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:139 +0x1bb
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016fe020, 0xc00115a450)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 155 [IO wait, 6774 minutes]:
internal/poll.runtime_pollWait(0x7fd9b1294d08, 0x72, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/netpoll.go:184 +0x55
internal/poll.(*pollDesc).wait(0xc00073a018, 0x72, 0x0, 0x0, 0x3b69084)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:87 +0x45
internal/poll.(*pollDesc).waitRead(...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:92
internal/poll.(*FD).Accept(0xc00073a000, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_unix.go:384 +0x1f8
net.(*netFD).accept(0xc00073a000, 0xc000097cd8, 0x18890b4, 0xc0007340a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/fd_unix.go:238 +0x42
net.(*TCPListener).accept(0xc000a9e000, 0x5f63c107, 0xc000097cd8, 0x16119d6)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/tcpsock_posix.go:139 +0x32
net.(*TCPListener).Accept(0xc000a9e000, 0xc000097d28, 0x18, 0xc000489500, 0x18885e4)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/tcpsock.go:261 +0x47
net/http.(*Server).Serve(0xc000734000, 0x4234760, 0xc000a9e000, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2896 +0x280
net/http.(*Server).ListenAndServe(0xc000734000, 0x3, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2825 +0xb7
main.setupPrometheus.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/cmd/server/main.go:461 +0x37
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc000a8bf60, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc000a8bf60)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 156 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053c6e0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 157 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053c790)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 158 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053c840)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 159 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053cb00)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 160 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053cbb0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 161 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053cc60)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 219 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053d130)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 232 [select]:
github.com/ufo-nz/pxrbng/events/utils.(*poller).Poll(0xc001550cf0, 0x3b8e006, 0x17, 0xc0016a26f0, 0x5a, 0xc0016f6ac0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utils/utils.go:71 +0x2e2
github.com/ufo-nz/pxrbng/events/mediator.New.func1(0xc0016f6ac0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:74 +0xaa
github.com/ufo-nz/pxrbng/events/mediator.(*Mediator).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:157 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008a97e0, 0xc001550d20)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 218 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc00053d080)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 382 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc005170840)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 233 [select]:
github.com/ufo-nz/pxrbng/events/utils.(*poller).Poll(0xc001550cf0, 0x3b946d9, 0x19, 0xc0016de650, 0xa, 0xc0016f6ad0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utils/utils.go:71 +0x2e2
github.com/ufo-nz/pxrbng/events/mediator.New.func2(0xc0016f6ad0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:90 +0xaa
github.com/ufo-nz/pxrbng/events/mediator.(*Mediator).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:157 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008a9820, 0xc001550d50)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 519 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010c, 0x2, 0xc0004b1c00, 0xc001780300)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549470, 0xc0015494a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 235 [select]:
github.com/ufo-nz/pxrbng/events/utils.(*poller).Poll(0xc001550cf0, 0x3b76248, 0xe, 0xc0016ca120, 0x3c, 0xc0016f6af0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utils/utils.go:71 +0x2e2
github.com/ufo-nz/pxrbng/events/mediator.New.func4(0xc0016f6af0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:122 +0xaa
github.com/ufo-nz/pxrbng/events/mediator.(*Mediator).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:157 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008a9880, 0xc001550db0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 513 [chan receive, 6774 minutes]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handleWorker(0xc005422000, 0xc0017328a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:139 +0x1bb
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016fe080, 0xc00115a4e0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 527 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc001780380)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549770, 0xc0015497a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 534 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780410)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549a10, 0xc001549a40)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 11243107 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc01fcac790)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 501 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc005422a50)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 884 [chan receive, 308 minutes]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handleWorker(0xc003eb2160, 0xc0017c3f10)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:139 +0x1bb
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016ee100, 0xc001300ab0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 236 [select]:
github.com/ufo-nz/pxrbng/events/utils.(*poller).Poll(0xc001550cf0, 0x3b915fe, 0x18, 0xc0016f6b10, 0x5a, 0xc0016f6b00)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utils/utils.go:71 +0x2e2
github.com/ufo-nz/pxrbng/events/mediator.New.func5(0xc0016f6b00)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:138 +0xaa
github.com/ufo-nz/pxrbng/events/mediator.(*Mediator).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:157 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008a98c0, 0xc001550de0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 361614280 [select]:
github.com/ufo-nz/pxrbng/function/execution/vm.(*MemoryUsagePoller).Start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/function/execution/vm/memory_usage.go:77 +0x17f
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc09cfeb7a0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc09cfeb7a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 383 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc0051708f0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 234 [select]:
github.com/ufo-nz/pxrbng/events/utils.(*poller).Poll(0xc001550cf0, 0x3b6dfca, 0xa, 0xc0016889e0, 0xa, 0xc0016f6ae0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/utils/utils.go:71 +0x2e2
github.com/ufo-nz/pxrbng/events/mediator.New.func3(0xc0016f6ae0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:106 +0xaa
github.com/ufo-nz/pxrbng/events/mediator.(*Mediator).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/events/mediator/mediator.go:157 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008a9840, 0xc001550d80)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 384 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc0051709a0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 536 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780440)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549ad0, 0xc001549b00)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 509 [select]:
github.com/ufo-nz/pxrbng/queue/consumer.(*Poller).poll(0xc111a4def0, 0xc000960360, 0xc003f030e0, 0xc0059e65a0, 0x2e)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/poller.go:66 +0x2d4
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).handlePoller(0xc005422000, 0xc001732820)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:112 +0x3d5
github.com/ufo-nz/pxrbng/queue/consumer.(*Consumer).start.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/queue/consumer/consumer.go:69 +0x2e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0016fe000, 0xc00115a420)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 530 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc0017803b0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549890, 0xc0015498c0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 529 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc0017803a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549830, 0xc001549860)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 358259959 [select, 1698 minutes]:
github.com/ufo-nz/pxrbng/function/execution/vm.(*eventLoop).processAsyncWorkQueue.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/function/execution/vm/event_loop.go:450 +0x17b
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc079355a00, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc079355a00)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 532 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc0017803e0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549950, 0xc001549980)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 319 [IO wait]:
internal/poll.runtime_pollWait(0x7fd9b12940d8, 0x72, 0xffffffffffffffff)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/runtime/netpoll.go:184 +0x55
internal/poll.(*pollDesc).wait(0xc000a7e818, 0x72, 0x1000, 0x1000, 0xffffffffffffffff)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:87 +0x45
internal/poll.(*pollDesc).waitRead(...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_poll_runtime.go:92
internal/poll.(*FD).Read(0xc000a7e800, 0xc003a1d000, 0x1000, 0x1000, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/internal/poll/fd_unix.go:169 +0x1cf
net.(*netFD).Read(0xc000a7e800, 0xc003a1d000, 0x1000, 0x1000, 0x0, 0xc036f7b808, 0x1a8b3cb)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/fd_unix.go:202 +0x4f
net.(*conn).Read(0xc0002da0b0, 0xc003a1d000, 0x1000, 0x1000, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/net.go:184 +0x68
net/http.(*connReader).Read(0xc001642360, 0xc003a1d000, 0x1000, 0x1000, 0xc000aae550, 0x1, 0x4d4a400006000)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:785 +0xf4
bufio.(*Reader).fill(0xc003a76300)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:100 +0x103
bufio.(*Reader).ReadSlice(0xc003a76300, 0xa, 0x7fd987a08560, 0xc036f7b9a8, 0x1595d46, 0xc0a6bf5b00, 0x100)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:359 +0x3d
bufio.(*Reader).ReadLine(0xc003a76300, 0xc036f7b9b0, 0xc0004b0380, 0x7fd9b1337648, 0x0, 0x8, 0xc036f7b9f0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/bufio/bufio.go:388 +0x34
net/textproto.(*Reader).readLineSlice(0xc15be0f4a0, 0xc0a6bf5b00, 0xc000a7e800, 0x0, 0x0, 0x15bbc6c)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/textproto/reader.go:57 +0x6c
net/textproto.(*Reader).ReadLine(...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/textproto/reader.go:38
net/http.readRequest(0xc003a76300, 0x0, 0xc0a6bf5b00, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/request.go:1012 +0x92
net/http.(*conn).readRequest(0xc0019b6320, 0x424bba0, 0xc003952580, 0x0, 0x0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:965 +0x15f
net/http.(*conn).serve(0xc0019b6320, 0x424bba0, 0xc003952580)
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:1817 +0x6d4
created by net/http.(*Server).Serve
	/data/mci/de15761517ab4e03639b2dc2360a247b/go/src/net/http/server.go:2928 +0x384

goroutine 520 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010c, 0x2, 0xc0004b1c00, 0xc001780310)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0015494d0, 0xc001549500)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 33540615 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc030298420)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 7916769 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc0174296b0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 531 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc0017803d0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0015498f0, 0xc001549920)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 761578 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc019f2be40)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 313 [select]:
github.com/ufo-nz/pxrbng/utils.(*basicResourcePool).startStatsLoop.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/resource_pool.go:363 +0x9ee
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008bc4c0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc0008bc4c0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 518 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010c, 0x2, 0xc0004b1c00, 0xc0017802f0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549410, 0xc001549440)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 535 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780420)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549a70, 0xc001549aa0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 537 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780450)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549b30, 0xc001549b60)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 538 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780470)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549b90, 0xc001549bc0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 311 [select, 1 minutes]:
github.com/ufo-nz/pxrbng/nxz.(*watcher).handleNextStream(0xc0008bc020, 0x424bba0, 0xc0038df500, 0xc0017ac020, 0xc0017ac020, 0xc0017ac020, 0xc0017ac140, 0x0, 0x0, 0x0, ...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/nxz/watcher.go:273 +0x541
github.com/ufo-nz/pxrbng/nxz.(*watcher).Run.func1(0x424bba0, 0xc0038df4c0, 0xc0008bc020, 0xc0017ac020, 0xc0017ac020, 0xc0017ac020, 0xc0017ac140, 0x0, 0x0, 0x0, ...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/nxz/watcher.go:364 +0x16b
github.com/ufo-nz/pxrbng/nxz.(*watcher).Run(0xc0008bc020, 0x424bba0, 0xc0038df4c0, 0xc0017ac020, 0xc0017ac020, 0xc0017ac020, 0xc0017ac140, 0x0, 0x0, 0x0, ...)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/nxz/watcher.go:365 +0x180
github.com/ufo-nz/pxrbng/app/metadata.NewStoreWithOptions.func3()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/app/metadata/store.go:153 +0x1df
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0008bc040, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc0008bc040)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 312 [select]:
github.com/ufo-nz/pxrbng/utils.(*basicResourcePool).startEvictionLoop.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/resource_pool.go:449 +0x1da
github.com/ufo-nz/pxrbng/utils.(*basicResourcePool).startEvictionLoop.func2()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/resource_pool.go:461 +0x24
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0017ac100, 0xc0017ac110)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 360390856 [select, 1677 minutes]:
github.com/ufo-nz/pxrbng/function/execution/vm.(*eventLoop).processAsyncWorkQueue.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/function/execution/vm/event_loop.go:450 +0x17b
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc0676293c0, 0x0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
github.com/ufo-nz/pxrbng/utils.PanicCapturingFunc(0xc0676293c0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:156 +0x34
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGo
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:189 +0x3f

goroutine 500 [select]:
go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).update(0xc0054229a0)
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:420 +0x465
created by go.nxzdb.org/nxz-driver/x/nxz/driver/topology.(*Server).Connect
	/root/go/pkg/mod/github.com/nxzdb-forks/nxz-go-driver@v1.3.3-0.20200901181507-35fdd956e54b/x/nxz/driver/topology/server.go:175 +0x121

goroutine 527 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc00071010e, 0x2, 0xc001a49500, 0xc001780380)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549770, 0xc0015497a0)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49

goroutine 534 [select]:
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).worker(0xc0001cad80, 0xc000710110, 0x5, 0xc00543a000, 0xc001780410)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:561 +0x343
github.com/ufo-nz/pxrbng/applog/store.(*nxzDBStore).startWorker.func1()
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/applog/store/store_nxzdb.go:163 +0x4e
github.com/ufo-nz/pxrbng/utils.PanicCapturingFuncWithCallback(0xc001549a10, 0xc001549a40)
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:183 +0x57
created by github.com/ufo-nz/pxrbng/utils.PanicCapturingGoWithCallback
	/data/mci/de15761517ab4e03639b2dc2360a247b/pxrbng/utils/utils.go:195 +0x49
`;
