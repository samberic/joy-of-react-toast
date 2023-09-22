import React from "react";

export const useEscapeKey = (fn) => {
  React.useEffect(() => {
    const escListener = (e) => {
      if (e.key === "Escape") {
        fn();
      }
    };
    document.addEventListener("keydown", escListener);
    return () => document.removeEventListener("keydown", escListener);
  }, []);
};
