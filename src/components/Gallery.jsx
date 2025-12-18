import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const images = [
  { src: "https://bonjourdubai.fr/wp-content/uploads/2025/01/burj-khalifa.jpg", key: "burj" },
  { src: "https://www.pelago.com/img/products/AE-United%20Arab%20Emirates/morning-desert-safari-in-dubai/eb2d179d-6355-466d-b707-e704786f4614_morning-desert-safari-in-dubai.jpg", key: "desert" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpymCxeKVHdusQNC6jk1vELyrac-lXuqDWPBASxGu8gH9iojYFZ6wj4dmDx8sQusDZ75c&usqp=CAU", key: "palm" },
  { src: "https://www.travellers-society.com/wp-content/uploads/548610860.jpeg", key: "hotel" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyw08aYuK-rCRQMuWT0lcHw4s11fL1I6RusQ&s", key: "marina" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1clIIIw5_6txtBiB8qIVgl3xR5WFYBiO-Gg&s", key: "yacht" },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section
    id="gallery"
      dir={isAr ? "rtl" : "ltr"}
      className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4EC3C7]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#4EC3C7]/10 text-[#4EC3C7] text-sm font-semibold tracking-wide mb-4">
            {t("gallery.smallTitle")}
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {t("gallery.mainTitle")}
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-black"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.key}
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-white text-2xl font-bold mb-1">
                  {t(`gallery.cards.${img.key}`)}
                </h4>
                <p className="text-gray-200 text-sm tracking-wide">
                  Premium Dubai Experience
                </p>
              </div>

              {/* Badge */}
              <div className="absolute top-6 right-6 bg-white/90 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                Dubai
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 group-hover:ring-[#4EC3C7]/60 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
