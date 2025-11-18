import { imgs } from "@/assets/assets";
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/contact-bg-color.png')] bg-no-repeat bg-center bg-size[90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-family-ovo">Contacto</h4>
      <h2 className="text-center text-5xl font-family-ovo">
        Ponte en contacto conmigo
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-family-ovo">
        Si tienes alguna duda, pregunta o comentario, no dudes en contactarme
        mediante el siguiente formulario.
      </p>
      <form className="max-w-2xl mx-auto">
        <div className="grid grid-auto-fit gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Ingresa tu nombre"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <textarea
          rows={6}
          placeholder="Ingresa tu comentario"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Enviar{" "}
          <Image src={imgs.rightArrowWhite} alt="right arrow" className="w-4" />
        </button>
        <p className="mt-4">Sending...</p>
      </form>
    </div>
  );
};

export default Contact;
