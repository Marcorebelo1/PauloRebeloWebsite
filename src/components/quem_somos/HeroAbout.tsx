"use client";
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="relative text-center py-24 px-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold"
      >
        Pintamos Portugal há mais de 30 anos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
      >
        Uma equipa dedicada a transformar espaços com qualidade, confiança e
        profissionalismo.
      </motion.p>
    </section>
  );
}
