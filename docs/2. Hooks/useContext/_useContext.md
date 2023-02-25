# useContext

https://beta.reactjs.org/reference/react/useContext

useContext is a React Hook that `lets you read and subscribe to context` from your component

## # Usage

- `Passing data deeply` into the tree

```
  export const ThemeContext = createContext(null);

  function MyPage() {
    return (
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    );
  }
```

```
  import { useContext } from 'react';

  function Button() {
    const theme = useContext(ThemeContext); // dark

    return <div />
  }
```

- `Updating data passed` via context

```
  function MyPage() {
    const [theme, setTheme] = useState('dark');
    return (
      <ThemeContext.Provider value={theme}>
        <Form />
        <Button onClick={() => {
          setTheme('light');
        }}>
          Switch to light theme
        </Button>
      </ThemeContext.Provider>
    );
  }
```

- Specifying a `fallback default value`

```
  const ThemeContext = createContext('light');
```

- Overriding context for a part of the tree

```
  <ThemeContext.Provider value="dark">
    ...
    <ThemeContext.Provider value="light">
      <Footer />
    </ThemeContext.Provider>
    ...
  </ThemeContext.Provider>
```

- Optimizing re-renders when passing objects and functions

```
  function MyApp() {
    const [currentUser, setCurrentUser] = useState(null);

    const login = useCallback((response) => {
      storeCredentials(response.credentials);
      setCurrentUser(response.user);
    }, []);

    const contextValue = useMemo(() => ({
      currentUser,
      login
    }), [currentUser, login]); // cache the context value

    return (
      <AuthContext.Provider value={contextValue}>
        <Page />
      </AuthContext.Provider>
    );
  }
```
