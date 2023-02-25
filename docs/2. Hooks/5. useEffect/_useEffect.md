# useEffect

useEffect is a React Hook that lets you `synchronize a component with an external system`

```
  useEffect(() => {
    // ...
  }, [dependencies])
```

# # Reference

Call useEffect `at the top level of your component` to declare an Effect

### Parameters

- setup: The function with your Effect’s logic. Your setup function may also optionally `return a cleanup function`
- optional dependencies: Trigger setup function if one of dependencies change (use Object.is for comparison)

### Returns

- useEffect returns undefined

### Caveats

- useEffect `is a Hook`, so you can only call it `at the top level of your component` or `your own Hooks`. If need to call inside a loop or condition, extract a new component

- `Don't need an Effect` if we `don't sync with other external system`

- Use `clean up function` to clean up data if needed

- React will let the browser `paint the updated screen` before `running Effect`. If you want to `block the browser from repainting the screen`, should use the `useLayoutEffect`

- Effects only run on the client. They `don’t run during server rendering`

# # Usage

### Connecting to an external system

```
  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();

  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
```

### Wrapping Effects in custom Hooks

```
  function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
      const options = {
        serverUrl: serverUrl,
        roomId: roomId
      };
      const connection = createConnection(options);
      connection.connect();
      return () => connection.disconnect();
    }, [roomId, serverUrl]);
  }
```

### Fetching data with Effects

```
  useEffect(() => {
    setData(null);
    fetchData(person).then(result => {
      setData(result);
    });
  }, [person]);
```

### Updating state based on previous state from an Effect

```
  function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(count + 1); // You want to increment the counter every second...
      }, 1000)
      return () => clearInterval(intervalId);
    }, [count]);
    // ...
  }
```
