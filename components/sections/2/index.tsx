import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface OurSpeakersSectionProps {
  speakers: {
    name: string;
    title: string;
    company?: string;
    image: string;
    bio?: string;
    link?: string;
  }[];
}

const OurSpeakersSection = ({ speakers }: OurSpeakersSectionProps) => {
  const [visibleSpeakers, setVisibleSpeakers] = useState<number[]>([]);
  const speakerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    speakerRefs.current = speakerRefs.current.slice(0, speakers.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index) && !visibleSpeakers.includes(index)) {
            setVisibleSpeakers((prev) => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    speakerRefs.current.forEach((ref, index) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [speakers.length, visibleSpeakers]);

  return (
    <div
      className="py-16 px-4 md:px-8"
      style={{
        background: "linear-gradient(-90deg, #343434 -7.52%, #000 108.41%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-normal text-center text-white mb-12">
          Our Speakers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              ref={(el) => {
                speakerRefs.current[index] = el;
              }}
              onClick={() => {
                if (speaker.link) {
                  window.open(speaker.link, "_blank");
                } else if (speaker.bio) {
                  alert(speaker.bio);
                }
              }}
              data-index={index}
              className={`flex flex-col items-center transition-all duration-700 ease-in-out border-0 bg-transparent overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 ${
                visibleSpeakers.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${(index % 4) * 150}ms`,
                transitionProperty: "transform, box-shadow, opacity, translate",
                transitionDuration: "300ms",
              }}
            >
              {/* Speaker Image with rounded corners */}
              <div className="relative w-full aspect-square mb-2 rounded-[40px] overflow-hidden bg-gradient-to-b from-[#362c4a] to-[#251d33]">
                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Purple gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#362c4a] to-transparent" />
              </div>

              {/* Title and company */}
              <div className="text-center px-2">
                {/* Speaker name at bottom */}
                <div className=" bottom-0 left-0 right-0 p-4 text-center">
                  <h2 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h2>
                </div>
                <p className="text-sm text-gray-300 leading-tight">
                  {speaker.title}
                </p>
                {speaker.company && (
                  <p className="text-sm text-gray-400 mt-1">
                    {speaker.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSpeakersSection;
