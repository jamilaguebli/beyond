import React from "react";
import { useTranslation } from "react-i18next";

const Slide = ({ img }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[70vh] md:h-screen">

      {/* Overlay (optionnel mais pro) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Texte CENTRÉ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center 
      text-center space-y-4 px-4 z-10">

        <h3 className="text-lg md:text-xl text-white tracking-wide">
          {t("hero.title")}
        </h3>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
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
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Slide;
