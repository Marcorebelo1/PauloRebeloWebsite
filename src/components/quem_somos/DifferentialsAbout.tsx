"use client";
import { motion } from "framer-motion";
import { FaPaintRoller, FaUserShield, FaSmile } from "react-icons/fa";

const differentials = [
  {
    icon: <FaPaintRoller />,
    title: "Materiais Premium",
    text: "Usamos apenas tintas e ferramentas certificadas.",
  },
  {
    icon: <FaUserShield />,
    title: "Equipa Qualificada",
    text: "Profissionais com anos de experiência.",
  },
  {
    icon: <FaSmile />,
    title: "Garantia de Satisfação",
    text: "2 anos de garantia em todos os serviços.",
  },
];

export default function DifferentialsAbout() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Porquê Escolher-nos?
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {differentials.map((diff, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // evita trigger precoce
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <span className="text-5xl text-blue-700 mb-4">{diff.icon}</span>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {diff.title}
            </h3>
            <p className="text-gray-600">{diff.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
