import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

const Footer = () => {
  const location = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      location: `Middle East & Africa HQ <br />
Office No: 209, The Metropolis Tower<br />
Business Bay, Dubai, United Arab Emirates`,
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      location: `Asia Pacific HQ<br />
7th floor Green Lanka Tower, Colombo<br />
Sri Lanka`,
    },
    {
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      location: `Saudi Arabia HQ<br />
Riyadh , Saudi Arabia`,
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      location: `+971 50 5718867`,
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      location: `partnerships@cogentsolutions.ae`,
    },
  ];

  const awards = [
    {
      img: "https://cogentsolutions.ae/views/img/logos/BPW-2024_2.png",
      alt: "Best Workplaces - Great Place to Work - GCC 2021",
      link: "#",
    },
    {
      img: "https://cogentsolutions.ae/views/img/logos/bestwork-04.png",
      alt: "Best Workplaces - Great Place to Work - GCC 2023",
      link: "#",
    },
    {
      img: "https://cogentsolutions.ae/views/img/logos/bestwork-03.png",
      alt: "Best Workplaces - Great Place to Work - UAE 2023",
      link: "#",
    },
    {
      img: "https://cogentsolutions.ae/views/img/logos/bestwork-01.png",
      alt: "Great Place to Work Certified",
      link: "#",
    },
  ];

  const socials = [
    {
      icon: <Facebook className="w-6 h-6" />,
      link: "#",
      color: "#1877F2",
      name: "Facebook",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "#",
      color: "#0A66C2",
      name: "LinkedIn",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      link: "#",
      color: "#E4405F",
      name: "Instagram",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      link: "#",
      color: "#1DA1F2",
      name: "Twitter",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <section>
            <section className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Cogent Solutions™
              </h2>
              <p className="text-gray-300 mb-6">
                Through our conferences we transform your business challenges
                into opportunities. Our clients and customers are leading
                government entities and the fortune 500 companies.
              </p>
            </section>
            {/* Awards */}
            <section className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-white">Awards</h2>
              <div className="flex flex-wrap gap-4">
                {awards.map((award, index) => (
                  <a
                    key={index}
                    href={award.link}
                    className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label={award.alt}
                  >
                    <Image
                      src={award.img}
                      alt={award.alt}
                      width={90}
                      height={90}
                      className="object-cover rounded-lg"
                    />
                  </a>
                ))}
              </div>
            </section>
          </section>

          {/* Office Locations */}
          <section className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-white">Our office</h2>
            <div className="flex flex-col gap-4">
              {location.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">{item.icon}</div>
                  <p
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: item.location }}
                  ></p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Cogent Solutions Event Management LLC. All Right Reserved
            </p>
            <div className="flex gap-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={`transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full p-2 hover:bg-gray-800 text-white hover:text-[${item.color}]`}
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
