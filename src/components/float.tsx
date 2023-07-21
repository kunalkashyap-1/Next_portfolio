"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Float() {
  useEffect(() => {
    const container = document.getElementById("container");
    const inner = document.getElementById("inner");

    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event: MouseEvent) {
        const e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e: HTMLElement) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };

    mouse.setOrigin(container!);

    let counter = 0;
    const updateRate = 10;
    const isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };

    const onMouseEnterHandler = function (event: MouseEvent) {
      update(event);
    };

    const onMouseLeaveHandler = function () {
      inner!.style.transform = "";
      //   inner!.style.webkitTransform = '';
      //   inner!.style.mozTransform = '';
      //   inner!.style.msTransform = '';
      //   inner!.style.oTransform = '';
    };

    const onMouseMoveHandler = function (event: MouseEvent) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    const update = function (event: MouseEvent) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / (inner!.offsetHeight || 1) / 2).toFixed(2),
        (mouse.x / (inner!.offsetWidth || 1) / 2).toFixed(2)
      );
    };

    const updateTransformStyle = function (x: string, y: string) {
      const style = `rotateX(${x}deg) rotateY(${y}deg)`;
      inner!.style.transform = style;
      //   inner!.style.webkitTransform = style;
      //   inner!.style.mozTransform = style;
      //   inner!.style.msTransform = style;
      //   inner!.style.oTransform = style;
    };

    container!.addEventListener("mouseenter", onMouseEnterHandler);
    container!.addEventListener("mouseleave", onMouseLeaveHandler);
    container!.addEventListener("mousemove", onMouseMoveHandler);

    return () => {
      container!.removeEventListener("mouseenter", onMouseEnterHandler);
      container!.removeEventListener("mouseleave", onMouseLeaveHandler);
      container!.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, []);
  return (
    <>
      <div
        id="container"
        style={{
          display:"inline-block",
          perspective: "25px",
          margin: "2rem",
          width: "24rem",
          minWidth: "16em",
          // height: "18rem",
        }}
      >
        <div
          id="inner"
          style={{
            backgroundColor: "white",
            boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s",
            WebkitTransition: "transform 0.5s",
            MozTransition: "transform 0.5s",
            OTransition: "transform 0.5s",
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/kunalkashyap-1/kunalkashyap-1/master/assets/giphy.webp"
            alt="profile pic"
            width={500}
            height={300}
            style={{
                width:"100%",
                height:"100%",
            }}
          />
        </div>
      </div>
    </>
  );
}
