# useDebugValue

useDebugValue is a React Hook that lets you `add a label to a custom Hook` in `React DevTools`

## # Usage

- Adding a label to a custom Hook

```
  function useOnlineStatus() {
    const status = isOnline ? 'Online' : 'Offline';
    // ...
    useDebugValue(status);
    useDebugValue(value, (value) => {
      return `The value is ${value}`
    })
    // ...
  }
```

- Deferring formatting of a debug value

```
  useDebugValue(date, date => date.toDateString());
```

## # Reference

https://beta.reactjs.org/reference/react/useDebugValue

https://www.youtube.com/watch?v=pTF86K8JZBQ&ab_channel=WebDevSimplified
