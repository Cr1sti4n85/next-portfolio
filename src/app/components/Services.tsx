import { imgs, servicesData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-family-ovo">Qué ofrezco</h4>
      <h2 className="text-center text-5xl font-family-ovo">Mis servicios</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-family-ovo">
        Desarrollador Full-Stack con dos años de experiencia desarrollando
        aplicaciones robustas y escalables para web y dispositivos móviles.
      </p>
      <div className="gap-6 my-10 grid grid-auto-fit">
        {servicesData.map(({ icon, title, description, link }, idx) => (
          <div
            key={idx}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <Image src={icon} alt={`Icono ${title}`} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Leer más{" "}
              <Image src={imgs.rightArrow} alt="icono flecha" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
