"use client";
import { imgs } from "@/assets/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="mt-20 font-family-outfit">
      <div className="text-center">
        <Image
          src={theme === "light" ? imgs.logo : imgs.darkLogo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={theme === "light" ? imgs.mailIcon : imgs.mailIconDark}
            alt="mail icon"
            className="w-6"
          />
          cp.lecaros@gmail.com
        </div>
      </div>
      <div className="text-center lg:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; {currentYear} Cristian Pérez. Todos los derechos reservados.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <a href="https://github.com/Cr1sti4n85" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/cperezlecaros/" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/Cr1sti4n85" target="_blank">
            Github
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
