import React from "react";
import { useTranslation } from "react-i18next";

const Slide = ({ img }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[70vh] md:h-screen">

      {/* Overlay (optionnel mais pro) */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      {/* Texte CENTRÉ */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 space-y-4 text-center">

        <h3 className="text-lg tracking-wide text-white md:text-2xl">
          {t("hero.title")}
        </h3>
        <h2 className="max-w-3xl text-2xl font-bold leading-tight text-white md:text-3xl">
          {t("hero.mainTitle")}
        </h2>

        <button className="bg-[#4EC3C7] text-white px-8 py-3 rounded-full 
        hover:bg-blue-800 transition">
          {t("hero.button")}
        </button>
      </div>

      {/* Image FULL SCREEN */}
      <img
        src={img}
        alt="slide"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Slide;
