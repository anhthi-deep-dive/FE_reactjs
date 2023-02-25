# useImperativeHandle

useImperativeHandle is a React Hook that lets you `customize the handle exposed as a ref`

## # Usage

Exposing a custom ref handle to the parent component

```
  const MyInput = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    }, []);

    return <input {...props} ref={inputRef} />;
  });
```

Exposing your own imperative methods

```
  // Add comment.js
  const AddComment = forwardRef(function AddComment(props, ref) {
    return <input placeholder="Add comment..." ref={ref} />;
  });
```

```
  // CommentList.js
  const CommentList = forwardRef(function CommentList(props, ref) {
    const divRef = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        scrollToBottom() {
          const node = divRef.current;
          node.scrollTop = node.scrollHeight;
        }
      };
    }, []);
```

```
  // Post.js
  const Post = forwardRef((props, ref) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);
```

```
  // App.js
  export default function Page() {
    const postRef = useRef(null);

    function handleClick() {
      postRef.current.scrollAndFocusAddComment();
    }
```

## # Reference

https://beta.reactjs.org/reference/react/useImperativeHandle
