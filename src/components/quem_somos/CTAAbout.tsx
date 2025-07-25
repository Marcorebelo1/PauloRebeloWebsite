"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTAAbout() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 text-center text-white overflow-hidden">
      <div className="absolute top-10  bg-blue-300 opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg"
      >
        Pronto para transformar o seu espaço?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium"
      >
        Fale connosco hoje e peça o seu orçamento gratuito.<br className="hidden md:block" />
        <span className="text-blue-100 font-semibold">Qualidade e satisfação garantidas em cada projeto.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="/contacto"
          className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-xl hover:bg-blue-100 transition text-lg"
        >
          Pedir Orçamento <FaArrowRight className="text-blue-600 text-xl" />
        </a>
      </motion.div>
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl blur-md opacity-40"></div>
    </section>
  );
}
