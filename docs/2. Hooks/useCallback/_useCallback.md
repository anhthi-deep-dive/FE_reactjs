# useCallback

https://beta.reactjs.org/reference/react/useCallback

useCallback is a React Hook that lets you `cache a function definition` between re-renders

React will `compare the dependencies` using `Object.is`. If `none of the dependencies have changed`, useCallback will return `the same function as before`. Otherwise, useCallback will `return the function you passed` on this render

```
  function ProductPage({ productId, referrer, theme }) {
    const handleSubmit = useCallback((orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    }, [productId, referrer]);

    return (
      <div className={theme}>
        <ShippingForm onSubmit={handleSubmit} />
      </div>
    );
  }
```

## # Usage

- `Skipping re-rendering` of components
- `Updating state` from `a memoized callback`
- `Preventing an Effect` from `firing too often`
- `Optimizing a custom Hook`
