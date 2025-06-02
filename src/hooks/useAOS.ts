

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS(
    options = { 
        duration: 500, 
        once: true, 
        mirror: true, 
    }
) {
  //* AOS animation useEffect
  useEffect(() => {
    AOS.init(options);

    //* AOS refresh
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [options]);
}
