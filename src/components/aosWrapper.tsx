"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const withAnimation = <P extends object>(Component: React.ComponentType<P>) => {
  const prefersReducedMotion = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  };

  const AOSWrapper: React.FC<P> = (props) => {
    useEffect(() => {
      AOS.init({
        // Only enable AOS animations if prefers-reduced-motion is false
        disable: prefersReducedMotion(),
        once: true, // Animations will be triggered only once
      });
    }, []);

    return <Component {...props} />;
  };

  return AOSWrapper;
};

export default withAnimation;
