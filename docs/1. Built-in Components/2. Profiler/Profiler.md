# Profiler

Profiler lets you `measure rendering performance` of a React tree programmatically

Usage

- `Measuring rendering performance` programmatically
- `Measuring different parts` of the application

```
  <Profiler id="App" onRender={onRender}>
    <App />
  </Profiler>
```

# # Reference

## Profiler

Wrap a component tree in a <Profiler> to measure its rendering performance

Props

- id: A string `identifying the part of the UI` you are measuring
- onRender: A callback for it every time `components within the profiled tree update`

## onRender Callback

```
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Aggregate or log render timings...
  }
```

Parameters

- `id`: lets you `identify which part of the tree` was committed if you are `using multiple profilers`
- `phase`: mount, update or nested-update, lets you know whether the tree has just been `mounted for the first time` or `re-rendered`
- `actualDuration`: The `number of milliseconds` spent `rendering the Profiler and its descendants` for the current update
- `baseDuration`: The `number of milliseconds estimating` how much time it would take to re-render the entire Profiler subtree `without any optimizations`
- `startTime`: `A numeric timestamp` for when React `began rendering` the current update
- `endTime`: `A numeric timestamp` for when React `committed` the current update. This value is shared between all profilers in a commit
