export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh" }}
    >
      {/* Desktop & Tablet Video (hidden on mobile) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-desktop"
      >
        <source src="/images/all_views_motion%20horizontal.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video (hidden on desktop/tablet) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-mobile"
      >
        <source src="/images/mobile_view_resoch%20motion_3.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
