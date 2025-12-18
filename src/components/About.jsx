import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section
    id="aboutUs"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Content */}
        <div className="order-2 lg:order-1">
          <h3 className="text-[#4EC3C7] font-semibold text-lg mb-3 uppercase tracking-wide">
            {t("about.smallTitle")}
          </h3>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {t("about.mainTitle")}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            {t("about.paragraph1")}
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            {t("about.paragraph2")}
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {["value1", "value2", "value3", "value4"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="w-4 h-4 rounded-full bg-[#4EC3C7]" />
                <span className="font-medium text-gray-800">
                  {t(`about.${item}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="absolute -top-6 -right-6 w-full h-full bg-[#4EC3C7]/20 rounded-[2rem]" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVhzNQpB8S2i-EFNWY5SOm5t1i1X-8XWhFg&s"
            alt="Beyond Travel Agency"
            className="relative z-10 rounded-[2rem] shadow-2xl w-full h-[420px] object-cover"
          />

          {/* Glass effect */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
            <p className="font-semibold text-gray-900">
              🌍 10+ Years Experience
            </p>
            <p className="text-sm text-gray-600">
              Trusted Travel Experts
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
