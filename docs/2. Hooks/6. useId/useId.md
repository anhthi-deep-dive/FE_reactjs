# useId

useId is a React Hook for `generating unique IDs` that can be `passed to accessibility attributes`

# # Reference

Call useId at the top level of your component to generate a unique ID

### Parameters

- useId does not take any parameters

### Returns

### Caveats

- useId `should not be used` to `generate keys in a list`

# # Usage

### Generating unique IDs for accessibility attributes

HTML accessibility attributes like aria-describedby let you specify that two tags are related to each other

```
  import { useId } from 'react';

  function PasswordField() {
    const passwordHintId = useId();
    return (
      <>
        <label>
          Password:
          <input
            type="password"
            aria-describedby={passwordHintId}
          />
        </label>
        <p id={passwordHintId}>
          The password should contain at least 18 characters
        </p>
      </>
    );
  }
```
