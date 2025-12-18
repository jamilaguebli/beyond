import React from "react";
import { useTranslation } from "react-i18next";

export default function Theme() {
  const { t } = useTranslation();

  const cards = [
    { title: t("honeymoon"), text: t("packages"), img: "https://beach.palaceresorts.com/superior-honeymoon-suite-beach-palace_39de315685.webp" },
    { title: t("family"), text: t("packages"), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggaIM4OTGCvPv5jEfi2B2fO68aShf091z6g&s" },
    { title: t("group"), text: t("packages"), img: "https://ucdn.tatilbudur.net/Otel/486x290/royal-wings-hotel_824513.jpg" },
    { title: t("relax"), text: t("packages"), img: "https://thumbs.dreamstime.com/b/woman-relaxing-hot-tub-long-working-day-beautiful-spa-center-pool-60758176.jpg" },
    { title: t("nature"), text: t("packages"), img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKTNiEawZX1gP6IWXqk6HwMq0bih1EzYBt4Gz_xpnSAb2stIb95WQlY7zkSnnwlt--7A&usqp=CAU" },
  ];

  return (
    <section id="holidayPackages">
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-10">
      <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
        {t("themeTitle")}
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto">
        {cards.map((item, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300">
            <div className="flex justify-center">
              <div className="w-45 h-36 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            <div className="mt-5 space-y-1">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#4EC3C7] transition">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </div>

            <div className="mt-4 w-full h-[3px] bg-[#4EC3C7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
        ))}
      </div>
    </main>
    </section>
  );
}
