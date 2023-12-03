# rapid-meter
This package provides utilities to measure the execution time of both synchronous and asynchronous functions. It includes tools for measuring once or multiple times and calculating average execution times.

## Installation:
```bash
    npm install rapid-meter
```

>> Synchronous Functions
- **syncperformance(callback, label = "Performance")**

Measures the execution time of a synchronous function using console.time() and console.timeEnd() with a provided label.

- **syncmultitime(callback, times = 1, label = "Performance")**

Executes a synchronous function multiple times (times) and measures its execution time each time using console.time() and console.timeEnd().

- **avgsyncperformance(callback, times = 1, label = "Performance")**

Executes a synchronous function multiple times and computes the average execution time based on the measurements using process.hrtime().

>> Asynchronous Functions
- **asyncperformance(callback, label = "Performance")**

Measures the execution time of an asynchronous function using await, console.time(), and console.timeEnd() with a provided label.

- **avgasyncperformance(callback, times = 1, label = "Performance")**

Executes an asynchronous function multiple times and computes the average execution time using await, process.hrtime(), console.time(), and console.timeEnd().

- **asyncmultitime(callback, time = 1, label = "Performance")**

Executes an asynchronous function multiple times (time) and measures its execution time each time using await, console.time(), and console.timeEnd().

>> Example
```js
    const speedtestjs= require('rapidmeter');

    // Measure execution time of a synchronous function once
    speedtestjs.syncperformance(() => {
    // Your synchronous function here
    }, 'MySynchronousFunction');

    // Measure execution time of an asynchronous function once
    speedtestjs.asyncperformance(async () => {
    // Your asynchronous function here
    }, 'MyAsynchronousFunction');

    // Measure average execution time of a synchronous function
    speedtestjs.avgsyncperformance(() => {
    // Your synchronous function here
    }, 10, 'MySynchronousFunction');

    // Measure average execution time of an asynchronous function
    speedtestjs.avgasyncperformance(async () => {
    // Your asynchronous function here
    }, 10, 'MyAsynchronousFunction');

    // Measure execution time of an asynchronous function multiple times
    speedtestjs.asyncmultitime(async () => {
    // Your asynchronous function here
    }, 5, 'MyAsynchronousFunction');

```