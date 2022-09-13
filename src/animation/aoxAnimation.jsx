import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
export const AoxAnimation = () => {
  return useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
};
