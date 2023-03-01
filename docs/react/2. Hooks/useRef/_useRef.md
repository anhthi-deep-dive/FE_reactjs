# useRef

useRef is a React Hook that lets you `reference a value` that’s `not needed for rendering`

## # Usage

### Referencing a value with a ref

```
  function Stopwatch() {
    const intervalRef = useRef(0);

    function handleStartClick() {
      intervalRef.current = setInterval(() => {
        // ...
      }, 1000);
    }

    function handleStopClick() {
      clearInterval(intervalRef.current);
    }
```

### Manipulating the DOM with a ref

```
  function MyComponent() {
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }

    return <input ref={inputRef} />;
  }
```

### Avoiding recreating the ref contents

## # Reference

https://beta.reactjs.org/reference/react/useRef
