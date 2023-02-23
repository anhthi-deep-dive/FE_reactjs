# useDeferredValue

useDeferredValue is a React Hook that lets you `defer updating a part of the UI`

```
  function SearchPage() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    // ...
  }
```

# # Reference

Call useDeferredValue `at the top level of your component` to get a deferred version of that value

### Parameters

- value: The value you want to defer. It can have any type

### Returns

- During the `initial render`, the returned deferred value `will be the same` as the value you provided
- During `updates`, React will first attempt `a re-render with the old value` and then `try another re-render` in background with `the new value`

### Caveats

- The values for the useDeferredValue should either be `primitive values (like strings and numbers)` or `objects created outside of rendering`. Creating a `new object during rendering` can cause `unnecessary background re-renders`

- When useDeferredValue receives a different value (`compared with Object.is`), it `schedules a re-render` in the background with the new value from scratch (cancel the previous re-render)\
  E.g: The chart will only re-render after the user stops typing

- useDeferredValue is `integrated with Suspense`

- The background re-render caused by useDeferredValue does not fire Effects until it’s committed to the screen

# # Usage

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
