"use client";
import { useEffect, useRef, useState } from "react";
//@ts-expect-error becuase it's js library
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

interface BlurredVantaBackgroundProps {
  children?: React.ReactNode;
  blurStrength?: number;
  className?: string;
}

export default function BlurredVantaBackground({
  children,
  blurStrength = 5,
  className = "",
}: BlurredVantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<unknown>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0a192f,
        points: 10.0,
        maxDistance: 25.0,
        spacing: 20.0,
      });

      setVantaEffect(effect);
    }

    return () => {
      //@ts-expect-error because of the unkown type
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full min-h-screen">
      <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />
      <div
        className="fixed inset-0 z-10"
        style={{
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          backgroundColor: "rgba(10, 25, 47, 0.7)",
        }}
      />

      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
}
