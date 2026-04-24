import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Wait for the slide-up animation to finish before hiding it completely
    const timer = setTimeout(() => {
      setDone(true);
    }, 1800); // Wait for the intro animation (1s delay + 0.8s duration)

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2600); // Hide completely after slide-up finishes (1.8s + 0.8s slide duration)

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${done ? "done" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-text-wrapper">
          <div className="preloader-text">HR<span className="preloader-dot">.</span></div>
        </div>
      </div>
    </div>
  );
}
