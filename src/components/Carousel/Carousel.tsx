import { useCallback, useEffect, useRef, useState } from "react";
import "./Carousel.sass";

interface CarouselProps {
  className?: string;
  slides: string[];
}

interface SlideItemProps {
  slide: string;
  className?: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ slide, className }) => (
  <div className={`slide ${className || ""}`}>
    <img src={slide} alt="Slide" className="slide__image" />
  </div>
);

const Carousel: React.FC<CarouselProps> = ({ slides, className }) => {
  const [cur, setCur] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const len = slides.length;

  const goTo = (next: number, dir: "left" | "right") => {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCur(next);
      setAnimating(false);
    }, 400); // match CSS transition duration
  };

  const leftHandle = () => {
    if (animating) return;
    goTo(cur - 1 < 0 ? len - 1 : cur - 1, "left");
  };

  const rightHandle = useCallback(() => {
    if (animating) return;
    goTo(cur + 1 > len - 1 ? 0 : cur + 1, "right");
  }, [cur, len, animating]);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      rightHandle();
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [rightHandle]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      !animating
    ) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // swipe left
          rightHandle();
        } else {
          // swipe right
          leftHandle();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prev = cur - 1 < 0 ? len - 1 : cur - 1;
  const next = cur + 1 > len - 1 ? 0 : cur + 1;

  return (
    <div
      className={className + " carousel__container"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <a className="slide__leftBtn" onClick={leftHandle}>
        &#10094;
      </a>
      <a className="slide__rightBtn" onClick={rightHandle}>
        &#10095;
      </a>
      <div className="carousel__slides">
        <SlideItem
          slide={slides[cur]}
          className={animating ? "slide--out" : "slide--in"}
        />
        {animating && (
          <SlideItem
            slide={slides[direction === "right" ? next : prev]}
            className={
              direction === "right" ? "slide--in-right" : "slide--in-left"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
