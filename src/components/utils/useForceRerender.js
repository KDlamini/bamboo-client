import { useState } from 'react';

const useForceRerender = () => {
  const [increment, setIncrement] = useState(0);
  return () => setIncrement(increment + 1);
};

export default useForceRerender;
