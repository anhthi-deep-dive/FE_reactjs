let data = [];
let listeners = [];

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

export const store = {
  addItem: (item: string) => {
    data = [...data, item];
    emitChange();
  },
  subscribe: (listener) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot: () => {
    console.log("Num of listener: ", listeners.length);
    return data;
  },
};
