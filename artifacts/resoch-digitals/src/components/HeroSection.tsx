import { useEffect, useRef } from "react";

const DESKTOP_SRC = "/api/video/hero-desktop.mp4";
const MOBILE_SRC = "/api/video/hero-mobile.mp4";

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

    const attemptPlay = () => {
      video.play().catch(() => {
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
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      data-testid={testId}
    >
      <source src={src} type="video/mp4" />
    </video>
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
