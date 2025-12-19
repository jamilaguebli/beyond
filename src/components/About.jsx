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
      <div className="grid items-center grid-cols-1 px-4 mx-auto max-w-7xl lg:grid-cols-2 gap-14">

        {/* Content */}
        <div className="order-2 lg:order-1">
          

          <h2 className="mb-6 text-xl font-bold leading-tight text-gray-900 md:text-2xl xl:text-2xl">
            {t("about.mainTitle")}
          </h2>

          <p className="mb-5 leading-relaxed text-gray-600">
            {t("about.paragraph1")}
          </p>

          <p className="mb-10 leading-relaxed text-gray-600">
            {t("about.paragraph2")}
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {["value1", "value2", "value3", "value4"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-5 transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
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
          <div className="absolute p-4 shadow-lg bottom-6 left-6 bg-white/80 backdrop-blur-md rounded-xl">
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
