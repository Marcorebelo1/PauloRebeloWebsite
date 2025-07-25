"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const highlights = [
  { label: "Parcerias de Marcas de Tintas", value: 7 },
  { label: "Anos de Experiência", value: 30 },
  { label: "Projetos Concluídos", value: 800 },
  { label: "Clientes Satisfeitos", value: 600 },
];

export default function HighlightsAbout() {
  const [counts, setCounts] = useState(highlights.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((c, i) => (c < highlights[i].value ? c + 1 : c))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-blue-50 flex items-center">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl font-extrabold text-blue-800">{counts[i]}+</span>
            <span className="text-gray-700 font-medium mt-2">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
