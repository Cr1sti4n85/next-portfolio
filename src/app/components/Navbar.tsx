"use client";
import Image from "next/image";
import { imgs } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement>({} as HTMLUListElement);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={imgs.headerBgColor}
          alt="header background color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={imgs.logo}
            alt={"logo"}
            className="w-28 cursor-pointer mr-14"
            loading="eager"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm font-family-ovo opacity-50"
          }`}
        >
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
        <div className="flex items-center gap-4">
          <button>
            <Image src={imgs.moonIcon} alt="moon icon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-family-ovo"
          >
            Contáctame
            <Image src={imgs.arrowIcon} alt="arrow icon" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={imgs.blackMenu} alt="black menu" className="w-6" />
          </button>
        </div>
        {/*Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={imgs.blackX}
              alt="close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              Acerca de
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              Trabajos
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
