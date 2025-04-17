import React, { useState, useEffect, useRef } from "react";

const AgendaSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const agendaItems = [
    {
      time: "09:30 AM",
      title: "Registration & Welcome Coffee",
      speakers: [],
      isBreak: true,
      showRegistrationButton: true,
    },
    {
      time: "10:00 AM",
      title: "Opening Remarks",
      speakers: [
        "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
      ],
      isBreak: false,
    },
    {
      time: "10:10 AM",
      title: "Keynote session: Digital Transformation in a Gen AI World",
      speakers: [
        "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
      ],
      isBreak: false,
    },
    {
      time: "10:30 AM",
      title:
        "Decoding the Future - Transformation: The Opportunity & Time is Now",
      speakers: [
        "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
      ],
      isBreak: false,
    },
    {
      time: "11:00 AM",
      title:
        "Panel Discussion: Customer Acquisition - Gaining New Customers in a Highly Competitive World",
      speakers: [
        "Moderator: Mr. John Smith, Head of Customer Relations",
        "Panelist: Jane Doe, Head of International Marketing",
        "Panelist: Michael Johnson, VP of Customer Experience & Acquisition",
        "Panelist: Sara Williams, Head of Digital Strategy",
      ],
      isBreak: false,
    },
    {
      time: "11:30 AM",
      title:
        "Panel Discussion: Customer Retention - Keeping Customers Loyal in a Digital World",
      speakers: [
        "Panelist: Robert Williamson, Customer Marketing Director - Middle East & Africa",
        "Panelist: Maria Garcia, Head of Digital Analytics and International Client Retention",
        "Moderator: Michelle Wong, Head of Communications and Design Management",
      ],
      isBreak: false,
    },
    {
      time: "12:00 PM",
      title: "Coffee Break & Networking",
      speakers: [],
      isBreak: true,
    },
    {
      time: "12:30 PM",
      title: "Panel Discussion: Cost to Serve: Redefine Customer Delight",
      speakers: [
        "Moderator: David Roberts, Cost Optimization Strategy Director",
        "Panelist: Alexandra Johnson, Director of Business Strategy",
        "Panelist: Adrian Parker, Head of Operational Excellence",
        "Panelist: Jennifer Taylor, VP of International Operations",
      ],
      isBreak: false,
    },
    {
      time: "01:00 PM",
      title: "Panel Discussion: What do you need for 'fit for purpose?'",
      speakers: ["Moderator: Daniel Thompson, Cost Technology Director"],
      isBreak: false,
    },
    {
      time: "01:30 PM",
      title: "Making the case for change: The Question is How",
      speakers: ["Lead: Kelly R. Miller, Process Optimization Director"],
      isBreak: false,
    },
    {
      time: "02:00 PM",
      title: "Closing Remarks",
      speakers: [
        "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
      ],
      isBreak: false,
    },
    {
      time: "02:30 PM",
      title: "Lunch",
      speakers: [],
      isBreak: true,
    },
  ];

  // Ensure refs array has correct length
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, agendaItems.length);
  }, [agendaItems.length]);

  useEffect(() => {
    // Use Intersection Observer for better performance and animation triggering
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100px 0px", // Slightly before item comes into view
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          if (!isNaN(index) && !visibleItems.includes(index)) {
            // Add a slight staggered delay based on the index
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 100); // 100ms delay between each item
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each agenda item
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-white container mx-auto md:flex items-start space-x-0 md:space-x-5 my-10"
      id="agenda"
      ref={sectionRef}
    >
      <div className="md:mt-10">
        <h1
          className="text-4xl font-light text-center md:text-left mb-4"
          style={{
            background: "linear-gradient(to right, #694ED6, #C137A2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Agenda
        </h1>
      </div>

      <div className="space-y-6 m-5 bg-[#f9f1ff80] w-full">
        {agendaItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-index={i}
            className="relative transition-all duration-500 ease-out"
            style={{
              opacity: visibleItems.includes(i) ? 1 : 0,
              transform: visibleItems.includes(i)
                ? "translateY(0)"
                : "translateY(30px)",
              transitionDelay: `${Math.min(i * 50, 500)}ms`,
            }}
          >
            <div className="md:flex items-start gap-6 p-6 border-b border-[#dd05d4]">
              {/* Time column */}
              <div className="w-24 flex-shrink-0">
                <div className="font-medium text-gray-800">{item.time}</div>
                {item.showRegistrationButton && (
                  <div className="mt-1">
                    <button
                      className="text-white text-xs px-3 py-1 rounded-md font-medium transition-all hover:bg-opacity-90"
                      style={{ backgroundColor: "#dd05d4" }}
                    >
                      Registration
                    </button>
                  </div>
                )}
              </div>

              {/* Content column */}
              {item.title && (
                <div className="md:flex md:flex-col justify-center mt-2 md:mt-0">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  {item.speakers.length > 0 && (
                    <div className="mt-1 text-sm text-gray-600">
                      {item.speakers.map((speaker, idx) => (
                        <div key={idx} className="mb-1">
                          {speaker}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSection;
