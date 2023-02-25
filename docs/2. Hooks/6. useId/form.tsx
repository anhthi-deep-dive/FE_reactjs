import { useId } from "react";

export const Form = () => {
  const nameId = useId();
  // the input will be always on focus when clicking on the related label

  return (
    <>
      <label htmlFor={nameId}>Name:</label>
      <input type="password" id={nameId} />
    </>
  );
};
