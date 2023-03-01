# StrictMode

StrictMode lets you `find common bugs` in your components `early during development`

```
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
```

## # Usage

### Enabling Strict Mode for `entire app`

```
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
```

### Enabling strict mode for `a part of the app`

```
  function App() {
    return (
      <>
        <Header />
        <StrictMode>
          <main>
            <Sidebar />
            <Content />
          </main>
        </StrictMode>
        <Footer />
      </>
    );
  }
```

### `Fixing bugs` found by `double rendering` in development

### `Fixing bugs` found by `re-running Effects` in development

### `Fixing deprecation warnings` enabled by Strict Mode
