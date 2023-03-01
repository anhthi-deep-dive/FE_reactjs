# useDeferredValue

useDeferredValue is a React Hook that lets you `defer updating a part of the UI` to keep showing the previous results. The useDeferredValue will `firstly render for the original data` (from Props or State) and `try another re-render` with the deferred value `after the first render is done`

```
  function SearchPage() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    // ...
  }
```

## # Usage

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

### Indicating that the content is stale

```
  export default function App() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    const isStale = query !== deferredQuery;
    ...
```

### Deferring re-rendering for a part of the UI

```
  function App() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    return (
      <>
        <input value={text} onChange={e => setText(e.target.value)} />
        <SlowList text={deferredText} /> /* use memo */
      </>
    );
  }
```
