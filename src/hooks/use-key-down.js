import { useEffect, useState } from 'react';

const useKeyDown = (targetKey) => {
  const [keyDowned, setKeyDowned] = useState(false);

  useEffect(() => {
    const handleDown = ({ key }) => {
      if (key === targetKey) {
        setKeyDowned(true);
      }
    };

    const handleUp = ({ key }) => {
      if (key === targetKey) {
        setKeyDowned(false);
      }
    };

    window.addEventListener('keydown', handleDown);
    window.addEventListener('keyup', handleUp);

    return () => {
      window.removeEventListener('keydown', handleDown);
      window.removeEventListener('keyup', handleUp);
    };
  }, []);

  return keyDowned;
};

export default useKeyDown;
