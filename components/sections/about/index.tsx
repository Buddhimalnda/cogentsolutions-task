import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollPosition - (sectionTop - viewportHeight)) /
            (sectionHeight + viewportHeight)
        )
      );

      // Apply parallax effects with different speeds
      if (headingRef.current) {
        headingRef.current.style.transform = `translateY(${
          scrollProgress * -50
        }px)`;
        headingRef.current.style.opacity = (
          1 -
          scrollProgress * 0.3
        ).toString();
      }

      if (paragraphRef.current) {
        paragraphRef.current.style.transform = `translateY(${
          scrollProgress * -30
        }px)`;
        paragraphRef.current.style.opacity = (
          1 -
          scrollProgress * 0.5
        ).toString();
      }

      if (linkRef.current) {
        linkRef.current.style.transform = `translateY(${
          scrollProgress * -10
        }px)`;
        linkRef.current.style.opacity = (1 - scrollProgress * 0.7).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize positions

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#171717] py-24 md:py-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 transition-all duration-300"
        >
          About Finastra
        </h1>

        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed transition-all duration-300"
        >
          Finastra is a global provider of financial services software
          applications across Lending, Payments, Treasury and Capital Markets,
          and Universal (retail and digital) Banking. Committed to unlocking the
          potential of people, businesses and communities everywhere, its vision
          is to accelerate the future of Open Finance through technology and
          collaboration, and its pioneering approach is why it is trusted by
          ~8,100 financial institutions, including 45 of the world's top 50
          banks.
        </p>

        <p
          ref={linkRef}
          className="text-lg text-gray-400 transition-all duration-300"
        >
          For more information, visit{" "}
          <a
            href="https://www.finastra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            www.finastra.com
          </a>
          .
        </p>
      </div>

      {/* Background elements for parallax depth */}
      <div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-[300px] opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
          transform: "translateY(30px)",
        }}
      />
    </div>
  );
};

export default AboutSection;
