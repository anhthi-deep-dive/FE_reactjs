import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const UseLayoutEffect = () => {
  const [increment, setIncrement] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const movingOjectRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (increment && buttonRef.current && movingOjectRef.current) {
      movingOjectRef.current.style.transform = `translateY(${
        increment + 30
      }px)`;
    }
  }, [increment]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => {
          setIncrement(increment + 20);
        }}
      >
        Move
      </button>
      {increment ? <div ref={movingOjectRef}>Moving</div> : null}
    </>
  );
};
