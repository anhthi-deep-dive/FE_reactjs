# useMemo

useMemo is a React Hook that lets you `cache the result` of a calculation between re-renders

## # Usage

### Skipping expensive recalculations

```
  function TodoList({ todos, tab, theme }) {
    const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
    // ...
  }
```

### Skipping re-rendering of components

```
  const List = memo(function List({ items }) {
    // ...
  });
```

```
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );

  return (
    <div className={theme}>
      {/* ...List will receive the same props and can skip re-rendering */}
      <List items={visibleTodos} />
    </div>
  );
```

### Memoizing a dependency of another Hook

```
  function Dropdown({ allItems, text }) {
    const searchOptions = useMemo(() => {
      return { matchMode: 'whole-word', text };
    }, [text]);

    const visibleItems = useMemo(() => {
      return searchItems(allItems, searchOptions);
    }, [allItems, searchOptions]);
    // ...
```

### Memoizing a function

```
  export default function Page({ productId, referrer }) {
    const handleSubmit = useMemo(() => {
      return (orderDetails) => {
        post('/product/' + product.id + '/buy', {
          referrer,
          orderDetails
        });
      };
    }, [productId, referrer]);

    return <Form onSubmit={handleSubmit} />;
  }
```
