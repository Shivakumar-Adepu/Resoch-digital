import { useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero"
      >
        {/* To use YOUR OWN VIDEO: upload your .mp4 file to artifacts/resoch-digitals/public/
            and change the src below to "/hero-intro.mp4" */}
        <source
          src="/images/motion%20horizontal.mp4"
          type="video/mp4"
        />
        {/* Fallback: if the video above fails to load, the black background shows */}
      </video>
    </section>
  );
}
