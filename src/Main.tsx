import React, { FC, useState } from 'react';

const Main: FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount: () => void = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Practicing Vite + ESLint + Yarn Berry</h1>
      <div>
        <div>
          Current count: {count}
        </div>
        <button onClick={increaseCount}>
          Increase count
        </button>
      </div>
    </div>
  );
};

export default Main;
