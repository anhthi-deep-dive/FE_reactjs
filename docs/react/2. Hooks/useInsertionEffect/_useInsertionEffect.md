# useInsertionEffect

useInsertionEffect is a `version of useEffect` that `fires before any DOM mutations`

## # Caveats

- Effects `only run on the client`, not in server
- You `can’t update state` from inside useInsertionEffect
- By the time useInsertionEffect runs, `refs are not attached yet`, and DOM is not yet updated

## # Usage

## # Reference

https://beta.reactjs.org/reference/react/useInsertionEffect
