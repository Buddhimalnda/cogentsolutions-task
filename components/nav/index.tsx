import Image from "next/image";

interface NavbarProps {
  logo: any;
  links: {
    name: string;
    href: string;
  }[];
}

const Navbar = ({ links, logo }: NavbarProps) => {
  return (
    <div className="container mx-auto flex justify-between items-center p-4  w-full">
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
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
      </div>
      <div>
        <a
          href="#register"
          className="px-5 py-2.5 bg-transparent rounded-full border border-[#878787] font-sans text-base font-bold text-white leading-relaxed z-10 w-fit h-fit relative min-w-[130px] min-h-[50px] flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#171717]"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
