import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [observerEntry, setEntry] = useState({});
  const elRef = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setEntry(entries[0]),
      options
    );
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [elRef]);
  return { observerEntry, elRef };
};

export default useIntersectionObserver;
