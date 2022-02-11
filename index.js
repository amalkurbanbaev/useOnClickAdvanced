import { useEffect } from "react";

const useOnClickAdvanced = (refs, handler) => {
  // create array if node was deleted or not assigned
  const prettyArray = refs.filter((ref) => {
    if (ref.current !== null && ref.current !== undefined) {
      return ref;
    }
    return 0;
  });

  useEffect(() => {
    const listener = (event) => {
      // check array elements and do nothing if clicking ref's element or descendent elements
      for (let i = 0; i < prettyArray.length; i += 1) {
        if (
          prettyArray[i] === null ||
          !prettyArray[i].current ||
          prettyArray[i].current.contains(event.target)
        ) {
          return;
        }
      }
      // do, if clicked on area excluded in condition above
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler, prettyArray]);
};

export default useOnClickAdvanced;
