import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport } from "react-icons/fa";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const services = [
    {
      icon: <FaPlane />,
      title: t("travelServices.flightTitle"),
      desc: t("travelServices.flightDesc"),
      color: "#4EC3C7",
    },
    {
      icon: <FaHotel />,
      title: t("travelServices.hotelTitle"),
      desc: t("travelServices.hotelDesc"),
      color: "#F59E0B",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: t("travelServices.tourTitle"),
      desc: t("travelServices.tourDesc"),
      color: "#10B981",
    },
    {
      icon: <FaPassport />,
      title: t("travelServices.visaTitle"),
      desc: t("travelServices.visaDesc"),
      color: "#6366F1",
    },
  ];

  return (
    <section
    id="services"
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* TITLES */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-3 px-5 py-2 rounded-full bg-[#4EC3C7]/10 text-[#4EC3C7] font-semibold text-sm"
        >
          {t("travelServices.smallTitle")}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-16 text-gray-900"
        >
          {t("travelServices.mainTitle")}
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -14,
                boxShadow: `0px 25px 50px ${service.color}55`,
              }}
              className="relative bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.25, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-5xl mb-6"
                style={{ color: service.color }}
              >
                {service.icon}
              </motion.div>

              {/* TITLE */}
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom line */}
              <motion.span
                className="absolute bottom-0 left-0 h-[4px] w-0 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
