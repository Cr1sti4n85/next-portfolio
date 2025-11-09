import Image from "next/image";
import logo from "@/assets/logo.png";
import arrowIcon from "@/assets/arrow-icon.png";
import headerBgColor from "@/assets/header-bg-color.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={headerBgColor}
          alt="header background color"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={logo}
            alt={"logo"}
            className="w-28 cursor-pointer mr-14"
            loading="eager"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm font-family-ovo opacity-80">
          <li>
            <a href="#top">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#work">Trabajos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-family-ovo"
          >
            Contáctame
            <Image src={arrowIcon} alt="arrow icon" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
