import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import animateScrollTo from 'animated-scroll-to';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    animateScrollTo(0);
  }, [pathname]);

  return null;
}
