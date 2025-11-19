import { imgs } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20 font-family-outfit">
      <div className="text-center">
        <Image src={imgs.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={imgs.mailIcon} alt="mail icon" className="w-6" />
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
