import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaPassport,
} from "react-icons/fa";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const services = [
    {
      icon: <FaPlane />,
      title: t("travelServices.flightTitle"),
      desc: t("travelServices.flightDesc"),
    },
    {
      icon: <FaHotel />,
      title: t("travelServices.hotelTitle"),
      desc: t("travelServices.hotelDesc"),
    },
    {
      icon: <FaUmbrellaBeach />,
      title: t("travelServices.tourTitle"),
      desc: t("travelServices.tourDesc"),
    },
    {
      icon: <FaPassport />,
      title: t("travelServices.visaTitle"),
      desc: t("travelServices.visaDesc"),
    },
  ];

  return (
    <section
      id="services"
      dir={isAr ? "rtl" : "ltr"}
      className="py-24 bg-white"
    >
      <div className="px-4 mx-auto text-center max-w-7xl">

        {/* SMALL TITLE */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-6 py-2 rounded-full bg-[#4EC3C7]/10 text-[#4EC3C7] font-semibold text-xl"
        >
          {t("travelServices.smallTitle")}
        </motion.span>

        {/* MAIN TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-xl font-extrabold text-gray-900 md:text-5xl"
        >
          {t("travelServices.mainTitle")}
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="relative p-8 rounded-3xl shadow-xl bg-[#4EC3C7] text-white transition"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-2xl bg-white/20 backdrop-blur"
              >
                <div className="text-3xl text-white">
                  {service.icon}
                </div>
              </motion.div>

              {/* TITLE */}
              <h4 className="mb-3 text-xl font-bold">
                {service.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-white/90">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
