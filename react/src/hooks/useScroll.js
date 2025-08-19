import { useRef } from 'react';

const useScroll = () => {
  const refs = useRef([]);

  const scrollTo = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return [refs, scrollTo];
};

export default useScroll;