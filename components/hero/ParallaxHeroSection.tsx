import { useEffect, useRef } from "react";
import Image from "next/image";

const ParallaxHeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Parallax effect for background
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${
          scrollPosition * 0.05
        }px)`;
      }

      // Parallax effect for content - moving slower than background
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${
          scrollPosition * 0.02
        }px)`;
      }

      // Parallax effect for image - moving in opposite direction
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${
          -scrollPosition * 0.08
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#171717] overflow-hidden relative">
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbyioi2qq/q_auto/v1711694351/static/lightpng_1711694345_16780.png')",
          transform: "translateZ(0)", // Hardware acceleration
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 pb-0">
        <div
          ref={contentRef}
          className="flex flex-col items-center w-full max-w-6xl px-4 pt-24 md:pt-32"
        >
          {/* Organized by text */}
          <p className="font-sans text-lg text-[#878787] text-center pb-5 w-full max-w-xl relative z-10">
            organized by
          </p>

          {/* Logo */}
          <div className="mb-8">
            <Image
              src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/img/finastra-boardroom.png"
              alt="Finastra Logo"
              width={340}
              height={100}
              className="w-[200px] md:w-[340px]"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-sans text-4xl md:text-6xl lg:text-[80px] font-semibold text-white tracking-tighter leading-tight md:leading-[90px] text-center pb-5 md:pb-8 w-fit relative z-10">
            Reimagine Banking: <br />
            Adapt. Evolve. Thrive.
          </h1>

          {/* Event Details */}
          <p className="font-sans text-base md:text-lg text-[#878787] text-center pb-4 w-full max-w-xl relative z-10">
            Date: 9th April 2025
          </p>
          <p className="font-sans text-base md:text-lg text-[#878787] text-center pb-4 w-full max-w-xl relative z-10">
            Time: 9:30 AM - 2:00 PM GMT+2
          </p>
          <p className="font-sans text-base md:text-lg text-[#878787] text-center pb-4 w-full max-w-xl relative z-10">
            The Nile Ritz-Carlton, Cairo, Egypt
          </p>

          {/* Event Image with Parallax Effect */}
          <div className="w-full flex justify-center items-end py-8 md:py-12 max-w-6xl relative overflow-hidden">
            <div
              ref={imageRef}
              className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl -mb-16 md:-mb-24 transition-transform duration-300"
            >
              <Image
                src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Event-Overview%20SMALL.jpg"
                alt="Event Overview"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg md:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeroSection;
