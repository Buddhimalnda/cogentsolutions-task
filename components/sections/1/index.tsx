import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  LightBulbIcon,
  ChartBarIcon,
  UsersIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const EventOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const overviewObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          overviewObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const benefitsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
          benefitsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (overviewRef.current) {
      overviewObserver.observe(overviewRef.current);
    }

    if (benefitsRef.current) {
      benefitsObserver.observe(benefitsRef.current);
    }

    return () => {
      if (overviewRef.current) {
        overviewObserver.unobserve(overviewRef.current);
      }
      if (benefitsRef.current) {
        benefitsObserver.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefitsList = [
    {
      icon: <LightBulbIcon className="w-6 h-6 text-white" />,
      title: "Learn from industry experts",
    },
    {
      icon: <ChartBarIcon className="w-6 h-6 text-white" />,
      title: "Stay ahead of emerging trends",
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-white" />,
      title: "Connect with fellow banking professionals",
    },
    {
      icon: <BookOpenIcon className="w-6 h-6 text-white" />,
      title: "Enhance your knowledge, skills, and network",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />,
      title: "Share your expertise and experience with peers",
    },
  ];

  return (
    <div className="bg-[#171717] text-white w-full py-16 px-4 md:px-8 lg:px-16">
      {/* Event Overview Section */}
      <div className="max-w-7xl mx-auto">
        <div ref={overviewRef} className={`mb-12 md:flex space-x-4 `}>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 max-md:text-center transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            Event Overview
          </h1>

          <div
            className={`text-gray-300 space-y-6 transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="leading-relaxed">
              Join us on April 9th in Cairo, Egypt, for Finastra's Universal
              Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This
              exclusive event is designed to help you navigate and excel in the
              rapidly evolving banking landscape.
            </p>

            <p className="leading-relaxed">
              Our forum will bring together business and technology experts,
              industry leaders, and visionaries to share their insights on the
              latest trends and challenges in the banking sector. You'll gain
              valuable knowledge on topics such as Generative AI, the impact of
              volatility, globalization challenges, persistent supply chain
              issues, recession threats, shifts in competitive dynamics, and
              evolving regulations.
            </p>

            <p className="leading-relaxed">
              Each session will delve into the implications, challenges, and
              opportunities these topics present, providing you with practical
              strategies to leverage the latest technologies and capitalize on
              emerging opportunities. This is a unique chance to learn from the
              best in the industry, stay ahead of the curve, and connect with
              fellow retail banking professionals.
            </p>

            <p className="leading-relaxed">
              Don't miss this opportunity to enhance your knowledge, skills, and
              network in the finance and banking sector. Register today and
              secure your place at this must-attend event!
            </p>
          </div>
        </div>

        {/* Benefits Card */}
        <div
          ref={benefitsRef}
          className={`mt-16 bg-gradient-to-r from-purple-900 to-purple-700 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out ${
            benefitsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5">
              <div className="relative h-full min-h-[300px] lg:min-h-full p-5">
                <Image
                  src="https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Benefits-of-attending%20SMALL.jpg"
                  alt="Person checking smartwatch"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-4xl p-5 shadow-lg"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
                TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND
                IN 2025
              </h2>

              <div className="space-y-6">
                {benefitsList.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 transition-all duration-700 ease-in-out ${
                      benefitsVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="text-base md:text-lg font-medium">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
