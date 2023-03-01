# Suspense

Suspense lets you `display a fallback` until `its children have finished loading`

## # Usage

### Displaying a fallback while content is loading

```
  <Suspense fallback={<Loading />}>
    <Albums />
  </Suspense>
```

```
  export default function Albums({ artistId }) {
    const albums = use(fetchData(`/${artistId}/albums`));
    // ...
```

### Revealing content together at once

If only `one of these components suspends` waiting for some data, `all of them together` will be `replaced by the loading indicator`

```
  <Suspense fallback={<Loading />}>
    <Biography />
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
```

### Revealing nested content as it loads

```
  <Suspense fallback={<BigSpinner />}>
    <Biography />
    <Suspense fallback={<AlbumsGlimmer />}>
      <Panel>
        <Albums />
      </Panel>
    </Suspense>
  </Suspense>
```

### Showing stale content while fresh content is loading

```
  export default function App() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    return (
      <>
        <label>
          Search albums:
          <input value={query} onChange={e => setQuery(e.target.value)} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={deferredQuery} />
        </Suspense>
      </>
    );
  }
```

### Preventing already revealed content from hiding

### Indicating that a transition is happening

### Resetting Suspense boundaries on navigation

### Providing a fallback for server errors and server-only content
