import { useEffect, useRef } from "react";

export const useStickyHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const handleScroll = () => {
    headerRef.current?.classList.toggle("sticky", window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scoll", handleScroll);
    };
  }, []);

  return {
      headerRef
  };
};
