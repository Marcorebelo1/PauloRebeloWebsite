"use client";
import { motion } from "framer-motion";

const brands = [
  { src: "/assets/logos/dyrup.png", alt: "Dyrup" },
  { src: "/assets/logos/cin.png", alt: "Cin" },
  { src: "/assets/logos/robbialac.png", alt: "Robbialac" },
  { src: "/assets/logos/barbot.png", alt: "Barbot" },
  { src: "/assets/logos/arga.png", alt: "Arga" },
  { src: "/assets/logos/arga.png", alt: "Arga" },
];

export default function BrandsStrip() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white ">
      <h2 className="text-center text-xl font-boldtext-3xl md:text-4xl font-bold text-blue-800 mb-12 drop-shadow ">
        Trabalhamos apenas com marcas de confiança
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center px-6">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.alt}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex justify-center"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="max-h-16 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
