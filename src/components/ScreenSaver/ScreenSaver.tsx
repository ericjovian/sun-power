import React, { useEffect, useRef } from "react";
import "./ScreenSaver.sass";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setIsSavering,
  selectIsSavering,
} from "../../redux/slices/commonSlice";
import Logo from "../../assets/logos/sunpowernobg.png";

const ScreenSaver: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSavering = useAppSelector(selectIsSavering);
  const logoRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<number | null>(null);

  // Idle detection logic
  const resetIdleTimer = () => {
    if (timeout.current) clearTimeout(timeout.current);
    dispatch(setIsSavering(false));
    timeout.current = setTimeout(() => {
      dispatch(setIsSavering(true));
    }, 30000); // 1 minute idle
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "keydown",
      "mousedown",
      "scroll",
      "touchstart",
    ];
    events.forEach((e) => window.addEventListener(e, resetIdleTimer));
    resetIdleTimer();
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdleTimer));
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  // Bouncing logo logic
  useEffect(() => {
    if (!isSavering) return;

    let x = 0;
    let y = 0;
    const SPEED = 1.2;
    let dx = SPEED;
    let dy = SPEED;

    const logo = logoRef.current;
    const container = containerRef.current;

    if (!logo || !container) return;

    const logoRect = logo.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Set random start position
    x = Math.random() * (containerRect.width - logoRect.width);
    y = Math.random() * (containerRect.height - logoRect.height);

    // Optionally randomize direction too
    dx *= Math.random() < 0.5 ? 1 : -1;
    dy *= Math.random() < 0.5 ? 1 : -1;

    const animate = () => {
      if (!logoRef.current || !containerRef.current) return;
      let frameCount = 0;

      const logo = logoRef.current;
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();

      // Bounce off walls
      if (x + logoRect.width >= containerRect.width || x <= 0) dx = -dx;
      if (y + logoRect.height >= containerRect.height || y <= 0) dy = -dy;

      x += dx;
      y += dy;

      logo.style.transform = `translate(${x}px, ${y}px)`;

      // 🔥 Clone for trail effect
      const trail = logo.cloneNode(true) as HTMLImageElement;
      trail.style.position = "absolute";
      trail.style.pointerEvents = "none";
      trail.style.opacity = "0.5";
      trail.style.transition = "opacity 0.8s ease-out";
      trail.style.transform = `translate(${x}px, ${y}px)`;
      container.appendChild(trail);

      // Fade out and remove trail
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        setTimeout(() => container.removeChild(trail), 800);
      });

      frameCount++;
      if (frameCount % 5 === 0) {
        const trail = logo.cloneNode(true) as HTMLImageElement;
        // ... trail setup
        container.appendChild(trail);
        requestAnimationFrame(() => {
          trail.style.opacity = "0";
          setTimeout(() => container.removeChild(trail), 800);
        });
      }

      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isSavering]);

  if (!isSavering) return null;

  return (
    <div className="saver">
      <div className="saver__container" ref={containerRef}>
        <img
          src={Logo}
          alt="Bouncing Logo"
          className="saver__logo"
          ref={logoRef}
        />
      </div>
    </div>
  );
};

export default ScreenSaver;
