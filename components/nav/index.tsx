"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  logo: any;
  links: {
    name: string;
    href: string;
  }[];
}

const Navbar = ({ links, logo }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const route = useRouter();

  return (
    <div className="bg-[#171717] w-full overflow-hidden">
      <div className="container mx-auto flex justify-between items-center p-4 w-full">
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-gray-300 px-4 py-2 no-underline cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#register"
          className="hidden md:flex px-5 py-2.5 bg-transparent rounded-full border border-[#878787] font-sans text-base font-bold text-white leading-relaxed z-10 w-fit h-fit relative min-w-[130px] min-h-[50px] items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#171717]"
        >
          Register Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-white rounded flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <Menu className="text-black" size={24} />
          ) : (
            <X className="text-black" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        ref={menuRef}
        className={`md:hidden top-[100px] left-0 bg-[#171717]  w-full transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0  pointer-events-none"
        }`}
        style={{
          maxHeight: isMenuOpen ? "calc(100vh - 72px)" : "0",
          overflow: "hidden",
          zIndex: 40,
        }}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-4 opacity-100">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-gray-300 py-2 no-underline cursor-pointer transform transition-transform duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="py-2">
            <a
              href="#register"
              className="px-5 py-2.5 bg-transparent rounded-full border border-[#878787] font-sans text-base font-bold text-white leading-relaxed z-10 w-fit h-fit relative min-w-[130px] min-h-[50px] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#171717]"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 md:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
