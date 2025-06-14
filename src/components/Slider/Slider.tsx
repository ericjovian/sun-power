import React, { useRef, useEffect, useState } from "react";
import "./Slider.sass";
import Cummins from "../../assets/brands/cummins.webp";
import Perkins from "../../assets/brands/perkins.webp";
import Yanmar from "../../assets/brands/yanmar.webp";
import Deutz from "../../assets/brands/deutz.webp";
import Isuzu from "../../assets/brands/isuzu.webp";
import Faw from "../../assets/brands/faw.webp";
import Doosan from "../../assets/brands/doosan.webp";
import Lovol from "../../assets/brands/lovol.webp";
import Mitsubishi from "../../assets/brands/mitsubishi.webp";
import Mtu from "../../assets/brands/mtu.webp";
import Man from "../../assets/brands/man.webp";
import Stamford from "../../assets/brands/stamford.webp";
import Weichai from "../../assets/brands/weichai.webp";
import Baudouin from "../../assets/brands/baudouin.webp";
import Kubota from "../../assets/brands/kubota.webp";
import Leroy from "../../assets/brands/leroy.webp";
import Yuchai from "../../assets/brands/yuchai.webp";
import Woling from "../../assets/brands/woling.webp";
import Foton from "../../assets/brands/foton.webp";

const brandLogos = [
  Cummins,
  Perkins,
  Mitsubishi,
  Mtu,
  Yanmar,
  Isuzu,
  Faw,
  Deutz,
  Doosan,
  Man,
  Lovol,
  Stamford,
  Weichai,
  Baudouin,
  Kubota,
  Leroy,
  Yuchai,
  Woling,
  Foton,
];

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const position = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const velocity = useRef(0);
  const [speed, setSpeed] = useState(0.2);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!isDragging.current) {
        position.current -= speed;
        const track = trackRef.current;
        if (track) {
          const resetLimit = -track.scrollWidth / 2;
          if (position.current <= resetLimit) {
            position.current = 0;
          }
          if (position.current > 0) {
            position.current = resetLimit;
          }
          track.style.transform = `translateX(${position.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed]);

  // Mouse, touch, and trackpad (2-finger scroll) handlers
  useEffect(() => {
    const handlePointerDown = (x: number) => {
      isDragging.current = true;
      startX.current = x;

      // Pause animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const handlePointerMove = (x: number) => {
      if (!isDragging.current) return;
      const delta = x - startX.current;
      position.current += delta;
      velocity.current = delta * 0.2;
      startX.current = x;

      const track = trackRef.current;
      if (track) {
        track.style.transform = `translateX(${position.current}px)`;
      }
    };

    const handlePointerUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      // Update speed and direction
      const newSpeed = Math.max(0.2, Math.min(3, Math.abs(velocity.current)));
      setSpeed(newSpeed);
      velocity.current = velocity.current > 0 ? -newSpeed : newSpeed;

      // Resume animation
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(function loop() {
          if (!isDragging.current) {
            position.current -= speed;
            const track = trackRef.current;
            if (track) {
              const resetLimit = -track.scrollWidth / 2;
              if (position.current <= resetLimit) {
                position.current = 0;
              }
              if (position.current > 0) {
                position.current = resetLimit;
              }
              track.style.transform = `translateX(${position.current}px)`;
            }
          }
          animationRef.current = requestAnimationFrame(loop);
        });
      }
    };

    const slider = sliderRef.current;
    if (!slider) return;

    // Mouse
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      handlePointerDown(e.clientX);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX);
    const onMouseUp = () => {
      handlePointerUp();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    // Touch
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 1) return;
      handlePointerDown(e.touches[0].clientX);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) return;
      handlePointerMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      handlePointerUp();
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    // Trackpad (2-finger horizontal scroll)
    const onWheel = (e: WheelEvent) => {
      // Only respond to horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        position.current -= e.deltaX;
        velocity.current = e.deltaX * 0.2;
        const track = trackRef.current;
        if (track) {
          const resetLimit = -track.scrollWidth / 2;
          if (position.current <= resetLimit) {
            position.current = 0;
          }
          if (position.current > 0) {
            position.current = resetLimit;
          }
          track.style.transform = `translateX(${position.current}px)`;
        }
        // Prevent page from scrolling horizontally
        e.preventDefault();
      }
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("touchstart", onTouchStart, { passive: false });

    // Attach wheel event to the slider track only
    const track = trackRef.current;
    if (track) {
      track.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("touchstart", onTouchStart);
      if (track) {
        track.removeEventListener("wheel", onWheel);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [speed]);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider__track" ref={trackRef}>
        {Array(4)
          .fill(brandLogos)
          .flat()
          .map((logo, idx) => (
            <div className="slider__item" key={idx}>
              <img src={logo} alt={`brand-${idx}`} className="slider__img" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
