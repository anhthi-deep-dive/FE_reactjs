# useTransition

useTransition is a React Hook that lets you `update the state` without `blocking the UI`

## # Usage

### Marking a state update as a non-blocking transition

For example, if the user `clicks a tab` but then `change their mind and click another tab`, they can do that `without waiting for the first re-render to finish` (in case there is a heavy render task on the tab)

### Updating the parent component in a transition

### Displaying a pending visual state during the transition

### Preventing unwanted loading indicators

```
  function TabButton({ children, isActive, onClick }) {
    const [isPending, startTransition] = useTransition();
    // ...
    if (isPending) {
      return <b className="pending">{children}</b>;
    }
    // ...
```

## # Reference

https://beta.reactjs.org/reference/react/useTransition
