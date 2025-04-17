"use client";
import Navbar from "@/components/nav";
import Image from "next/image";
import HeroSection from "@/components/hero";
import ParallaxHeroSection from "@/components/hero/ParallaxHeroSection";
import EventOverview from "@/components/sections/1";
import OurSpeakersSection from "@/components/sections/2";
import AboutSection from "@/components/sections/about";
import RegisterSection from "@/components/sections/register";
import Footer from "@/components/footer";

export default function Home() {
  const speakers: {
    name: string;
    title: string;
    company: string;
    image: string;
    bio?: string;
    link?: string;
  }[] = [
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: " Al-Baraka Bank Egypt",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
      bio: "vsrgrhgreh",
    },
    {
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
      link: "https://example.com/jane-smith",
    },
  ];
  return (
    <div className="mx-auto">
      {/* hero */}
      <ParallaxHeroSection />
      {/* Event Overview */}
      <EventOverview />
      {/* Our Speakers */}
      <OurSpeakersSection speakers={speakers} />
      {/* Agenda */}
      {/* About */}
      <AboutSection />
      {/* Register  */}
      <RegisterSection />
      {/* footer */}
      <Footer />
    </div>
  );
}
