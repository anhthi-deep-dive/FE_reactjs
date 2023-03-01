import { useSyncExternalStore } from "react";

import { store } from "./store";

export const UseSyncExternalStore = () => {
  const data = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return (
    <>
      <button onClick={() => store.addItem(`Item ${new Date().getSeconds()}`)}>
        Add item
      </button>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
