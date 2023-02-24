const { useId } = require("react");

const UseId = () => {
  const passwordHintId = useId();

  return (
    <>
      <input type="password" aria-describedby={passwordHintId} />
      <p id={passwordHintId} />
    </>
  );
};

export default UseId;
