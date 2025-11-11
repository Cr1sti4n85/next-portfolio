import { imgs } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={imgs.profileImg}
          alt="profile picture"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-family-ovo">
        Hola, Soy Cristian Pérez{" "}
        <Image src={imgs.handIcon} alt="hand icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-family-ovo">
        Desarrollador Full-Stack
      </h1>
      <p className="max-w-2xl mx-auto font-family-ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus
        aperiam dicta hic ipsa? Dolores totam velit minus eum eius labore nobis,
        atque reiciendis, commodi repellat, excepturi veniam voluptas ipsa.
      </p>
      <div className="flex flex-col dm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contáctame
          <Image src={imgs.rightArrowWhite} alt="right arrow" className="w-4" />
        </a>
        <a
          href="/CV_Cristian_Perez.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Mi resume
          <Image src={imgs.downloadIcon} alt="download icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
