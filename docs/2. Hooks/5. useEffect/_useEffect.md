# useEffect

useEffect is a React Hook that lets you `synchronize a component with an external system`. The useEffect `runs after the browser repaint` the screen

```
  useEffect(() => {
    // ...
  }, [dependencies])
```

## # Caveats

- `Don't need an Effect` if we `don't sync with other external system`

- Use `clean up function` to clean up data if needed

- React will let the browser `paint the updated screen` before `running Effect`. If you want to `block the browser from repainting the screen`, should use the `useLayoutEffect`

- Effects only run on the client. They `don’t run during server rendering`

## # Usage

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
