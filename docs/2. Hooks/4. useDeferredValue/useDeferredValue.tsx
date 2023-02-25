import { useDeferredValue, useEffect, useMemo, useState } from "react";

const UseDeferredValue = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const list = useMemo(() => {
    const result = [];
    for (let i = 0; i < 50000; i++) {
      result.push(deferredQuery);
    }

    return result;
  }, [deferredQuery]);

  useEffect(() => {
    console.log("query: ", query);
  }, [query]);

  useEffect(() => {
    console.log("deferredQuery: ", deferredQuery);
  }, [deferredQuery]);

  return (
    <>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <p>Value: {query}</p>
      {list.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
};

export default UseDeferredValue;
