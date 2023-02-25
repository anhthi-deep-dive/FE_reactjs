# useSyncExternalStore

useSyncExternalStore is a React Hook that lets you `subscribe to an external store`

```
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

## # Usage

### Subscribing to an external store

### Subscribing to a browser API

```
  export default function ChatIndicator() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
  }

  function getSnapshot() {
    return navigator.onLine;
  }

  function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }
```

### Extracting the logic to a custom Hook

```
  export function useOnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return isOnline;
  }

  function getSnapshot() {
    return navigator.onLine;
  }

  function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }
```

### Adding support for server rendering

## # Reference

https://beta.reactjs.org/reference/react/useSyncExternalStore
