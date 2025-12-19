import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cbtbs0n",
        "template_4q7l9kd",
        formRef.current,
        "lITWxTkpAEE2aSwTo"
      )
      .then(
        () => alert(t("sendMessage") + " 🎉"),
        () => alert("Error sending message ❌")
      );
  };

  return (
    <section
    id="contactUs"
      className="flex items-center min-h-screen px-6 py-20 text-white"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(78,195,199,0.4), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0,140,255,0.4), transparent 45%),
          #0F172A
        `,
      }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="mb-16 text-5xl font-extrabold text-center bg-gradient-to-r from-white to-[#4EC3C7] bg-clip-text text-transparent">
          {t("contactTitle")}
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-20 mb-10 space-y-8 text-center lg:pt-32"
          >
            <p className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-300">
              {t("contactDescription")}
            </p>

            <div className="max-w-xl mx-auto space-y-8">
              {/* ADDRESS */}
              <div className="flex items-center gap-5 p-5 transition shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-white md:text-xl lg:text-xl">
                    {t("address")}
                  </h3>
                  <p className="text-sm text-gray-300 break-all sm:text-base lg:text-lg">
                    {t("addressValue")}
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-5 p-5 transition shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20">
                <div className="p-4 bg-green-600 rounded-full shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-white md:text-xl lg:text-xl">
                    {t("phone")}
                  </h3>
                  <p className="text-sm text-gray-300 break-all sm:text-base lg:text-lg">
                    {t("phoneValue")}
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-5 p-5 transition shadow-lg bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20">
                <div className="p-4 bg-pink-600 rounded-full shadow-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-semibold text-white md:text-xl lg:text-xl">
                    {t("email")}
                  </h3>
                  <p className="text-sm text-gray-300 break-all sm:text-base lg:text-lg">
                    {t("emailValue")}
                  </p>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="flex justify-center gap-6 pt-6">
                <a
                  href="https://www.facebook.com/share/1KT9U3PnMW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 transition bg-blue-600 rounded-full shadow-lg hover:scale-110 hover:bg-blue-700"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>

                <a
                  href="/instgram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 transition bg-pink-600 rounded-full shadow-lg hover:scale-110 hover:bg-pink-700"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 space-y-6 border shadow-2xl backdrop-blur-xl bg-white/10 rounded-3xl border-white/10"
          >
            <div>
              <label className="block mb-2 font-semibold text-gray-300">
                {t("yourName")}
              </label>
              <input
                type="text"
                name="user_name"
                placeholder={t("yourName")}
                required
                className="w-full p-4 rounded-xl bg-[#0F172A] border border-gray-600 text-gray-200 focus:ring-2 focus:ring-[#4EC3C7] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-300">
                {t("emailAddress")}
              </label>
              <input
                type="email"
                name="user_email"
                placeholder={t("emailAddress")}
                required
                className="w-full p-4 rounded-xl bg-[#0F172A] border border-gray-600 text-gray-200 focus:ring-2 focus:ring-[#4EC3C7] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-300">
                {t("subject")}
              </label>
              <input
                type="text"
                name="subject"
                placeholder={t("subject")}
                required
                className="w-full p-4 rounded-xl bg-[#0F172A] border border-gray-600 text-gray-200 focus:ring-2 focus:ring-[#4EC3C7] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-300">
                {t("message")}
              </label>
              <textarea
                name="message"
                placeholder={t("message")}
                required
                className="w-full h-40 p-4 rounded-xl bg-[#0F172A] border border-gray-600 text-gray-200 focus:ring-2 focus:ring-[#4EC3C7] outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-4 text-xl font-semibold rounded-xl text-[#0F172A] bg-[#4EC3C7] hover:bg-[#3bb2b6] transition"
            >
              {t("sendMessage")}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
