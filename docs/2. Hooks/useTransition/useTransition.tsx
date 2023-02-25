import { useState, useTransition } from "react";

export const UseTransaction = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const [isPending, startTransaction] = useTransition();

  const fulfillList = (value: string) => {
    const newList = [];
    for (let i = 0; i < 20000; i++) {
      newList.push(`${value} - ${Math.random()}`);
    }
    setList(newList);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransaction(() => {
      // Set low priority, mean let other setValue runs before setValue in startTransaction
      fulfillList(value);
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        list.map((item) => <p key={item}>{item}</p>)
      )}
    </>
  );
};
