import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import nd_beyond from "../assets/nd_beyond.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { t, i18n } = useTranslation();

  const handleNav = () => setNav(!nav);

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setNav(false);
  };

  const menuItems = [
    { id: "home", label: t("home") },
    { id: "services", label: t("services") },
    { id: "gallery", label: t("galleryMenu") },
    { id: "holidayPackages", label: t("holidayPackages") },
    { id: "aboutUs", label: t("aboutUs") },
    { id: "contactUs", label: t("contactUs") },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      
      <div className="w-full px-6 py-3 flex items-center justify-between bg-white/40 backdrop-blur-xl shadow-md transition hover:bg-white">
      
        <img src={nd_beyond} alt="logo" className="w-14 sm:w-16" />

       
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="
                relative cursor-pointer
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px] after:bg-[#4EC3C7]
                after:transition-all after:duration-300
                hover:after:w-full
                hover:text-[#4EC3C7]
              "
            >
              {item.label}
            </li>
          ))}
        </ul>

       
        <select
          value={i18n.language}
          onChange={handleLangChange}
          className="hidden md:block px-3 py-1.5 rounded-full border bg-white text-sm font-semibold focus:ring-2 focus:ring-[#4EC3C7]"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>

       
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

    
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[75%] h-screen bg-white p-6 shadow-2xl transition-all duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <img src={nd_beyond} alt="logo" className="w-24 mb-10" />

        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#4EC3C7] transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <select
            value={i18n.language}
            onChange={handleLangChange}
            className="w-full px-4 py-2 rounded-full border font-semibold"
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
