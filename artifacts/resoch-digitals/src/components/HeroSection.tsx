import { useEffect, useRef } from "react";

/* Vite replaces import.meta.env.BASE_URL with the actual base path at build time */
const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // remove trailing slash

const DESKTOP_SRC = `${base}/images/all_views_motion%20horizontal.mp4`;
const MOBILE_SRC = `${base}/images/mobile_view_resoch%20motion_3.mp4`;

function HeroVideo({
  src,
  className,
  testId,
}: {
  src: string;
  className: string;
  testId: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* Attempt play — some browsers block autoplay until user interaction */
    const attemptPlay = () => {
      video.play().catch(() => {
        /* If blocked, try again once the user touches/clicks anywhere */
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("canplay", attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener("canplay", attemptPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      data-testid={testId}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-black"
      style={{ height: "100svh" }}
    >
      {/* Desktop & Tablet (≥ 768 px) */}
      <HeroVideo
        src={DESKTOP_SRC}
        testId="video-hero-desktop"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile (< 768 px) */}
      <HeroVideo
        src={MOBILE_SRC}
        testId="video-hero-mobile"
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
}
