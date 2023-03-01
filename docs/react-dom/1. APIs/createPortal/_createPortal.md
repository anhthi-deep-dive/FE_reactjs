# createPortal

createPortal lets you `render some children` into `a different part of the DOM`

```
  <div>
    <SomeComponent />
    {createPortal(children, domNode)}
  </div>
```

## # Usage

### Rendering to a different part of the DOM

```
  function MyComponent() {
    return (
      <div style={{ border: '2px solid black' }}>
        <p>This child is placed in the parent div.</p>
        {createPortal(
          <p>This child is placed in the document body.</p>,
          document.body
        )}
      </div>
    );
  }
```

### Rendering a modal dialog with a portal

```
export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
```

```
  export default function App() {
    return (
      <div className="clipping-container">
        <PortalExample />
      </div>
    );
  }
```

### Rendering React components into non-React server markup

### Rendering React components into non-React DOM nodes

## # Reference

https://beta.reactjs.org/reference/react-dom/createPortal
