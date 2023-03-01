# Fragment

Fragment, often used via <>...</> syntax, lets you `group elements without a wrapper node`

```
  <>
    <OneChild />
    <AnotherChild />
  </>
```

## # Usage

### Returning multiple elements

```
  function Post() {
    return (
      <>
        <PostTitle />
        <PostBody />
      </>
    );
  }
```

### Assigning multiple elements to a variable

```
  function CloseDialog() {
    const buttons = (
      <>
        <OKButton />
        <CancelButton />
      </>
    );

    return (
      <AlertDialog buttons={buttons}>
        Are you sure you want to leave this page?
      </AlertDialog>
    );
  }
```

### Grouping elements with text

```
  function DateRangePicker({ start, end }) {
    return (
      <>
        From
        <DatePicker date={start} />
        to
        <DatePicker date={end} />
      </>
    );
  }
```

### Rendering a list of Fragments

```
  function Blog() {
    return posts.map(post =>
      <Fragment key={post.id}>
        <PostTitle title={post.title} />
        <PostBody body={post.body} />
      </Fragment>
    );
  }
```
