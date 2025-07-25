"use client";
import { motion } from "framer-motion";

export default function HeroContactos() {
  return (
    <section className="relative text-center py-24 px-4 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:30px_30px]"></div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold drop-shadow-lg"
      >
        Fale connosco, estamos aqui para ajudar!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg md:text-2xl font-medium"
      >
        Peça o seu orçamento, totalmente gratuito e sem compromisso.
      </motion.p>
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl blur-md opacity-40"></div>
    </section>
  );
}
