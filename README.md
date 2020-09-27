## What?

This tool can be used for analyzing stack dumps of goroutines - often helpful for finding leaks, race conditions, wasteful resource consumption, and generally getting an idea of what your program is doing.

Here's a simple example of code you can add to any program to make it easy to generate dumps on demand in response to a signal handler.

```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"runtime"
	"syscall"
)

// DumpAllGoroutines dumps all goroutine stacktraces to STDERR.
func DumpAllGoroutines() {
	buf := make([]byte, 1024)
	var stackLen int
	for {
		stackLen = runtime.Stack(buf, true)
		if stackLen < len(buf) {
			break
		}

		buf = make([]byte, len(buf)*2)
	}

	fmt.Fprintf(
		os.Stderr,
		"\n=== goroutine dump ===\n%s=== end of goroutine dump ===\n",
		buf[:stackLen],
	)
}

func init() {
	go func() {
		sigs := make(chan os.Signal, 1)
		signal.Notify(sigs, syscall.SIGQUIT)
		for {
			<-sigs
			DumpAllGoroutines()
		}
	}()
}
```

To trigger the dump, run `kill -SIGQUIT <pid>`.

## Running 

You can run this locally too.  In the project directory, run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes

This was built for the Skunkworks Hackathon 2020 at MongoDB. 

I welcome your comments, suggestions, and contributions.

Inspired by https://github.com/linuxerwang/goroutine-inspect

Gopher gif from https://github.com/egonelbre/gophers

