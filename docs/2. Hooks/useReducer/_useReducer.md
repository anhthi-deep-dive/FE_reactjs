# useReducer

useReducer is a React Hook that lets you `add a reducer` to your component

## # Usage

### Adding a reducer to a component

```
  function reducer(state, action) {
    // ...
  }

  function MyComponent() {
    const [state, dispatch] = useReducer(reducer, { age: 42 });
    // ...
  }
```

### Writing the reducer function

### Avoiding recreating the initial state
