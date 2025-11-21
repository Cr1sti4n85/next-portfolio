"use client";
import Image from "next/image";
import { imgs } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const { theme } = useTheme();
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handler = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={imgs.headerBgColor}
          alt="header background color"
          className="w-full"
        />
      </div> */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "shadow-sm backdrop-blur-lg" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={theme === "light" ? imgs.logo : imgs.darkLogo}
            alt={"logo"}
            className="w-28 cursor-pointer mr-14"
            loading="eager"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full  font-family-ovo px-12 py-3 shadow-sm dark:border dark:border-white/50  ${
            theme === "light" && "opacity-75 bg-white"
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
          {/* <button>
            <Image src={imgs.moonIcon} alt="moon icon" className="w-6" />
          </button> */}
          <ThemeToggler />
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-family-ovo dark:border-white/50"
          >
            Contáctame
            <Image
              src={theme === "light" ? imgs.arrowIcon : imgs.arrowIconDark}
              alt="arrow icon"
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={theme === "light" ? imgs.blackMenu : imgs.whiteMenu}
              alt="black menu"
              className="w-6"
            />
          </button>
        </div>
        {/*Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={theme === "light" ? imgs.blackX : imgs.whiteX}
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
