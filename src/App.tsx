/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

function App() {
  const [num, setNum] = useState<number>(1);

  const dispatchLog = useCallback(() => {
    console.log('log dispatched');
  }, [])

  useEffect(() => {
    console.log('função dispatch log renderizada');
  }, [dispatchLog])

  const multiplyState = () => {
    setNum((num) => num * 2);
  }

  return (
    <div>
      {num}
      <button onClick={multiplyState}>Multiply</button>
    </div>
  );
}

export default App;
