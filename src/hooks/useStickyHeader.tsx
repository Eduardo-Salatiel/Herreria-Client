import { useEffect, useRef } from "react";

export const useStickyHeader = (sticky: boolean) => {
  const headerRef = useRef<HTMLElement>(null);
  const handleScroll = () => {
    headerRef.current?.classList.toggle("sticky", window.scrollY > 0);
  };

  useEffect(() => {
    sticky
    ? window.addEventListener("scroll", handleScroll)
    : headerRef.current?.classList.add('sticky');

    return () => {
      window.removeEventListener("scoll", handleScroll);
    };
  }, []);

  return {
      headerRef
  };
};
