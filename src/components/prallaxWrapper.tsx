import React, { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

interface ParallaxWrapperProps {
  children: ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  return (
    <ParallaxProvider>
      <div className="relative">{children}</div>
    </ParallaxProvider>
  );
};

export default ParallaxWrapper;
