# useDebugValue

useDebugValue is a React Hook that lets you `add a label to a custom Hook` in `React DevTools`

## # Usage

- Adding a label to a custom Hook

```
  function useOnlineStatus() {
    // ...
    useDebugValue(isOnline ? 'Online' : 'Offline');
    // ...
  }
```

- Deferring formatting of a debug value

```
  useDebugValue(date, date => date.toDateString());
```
