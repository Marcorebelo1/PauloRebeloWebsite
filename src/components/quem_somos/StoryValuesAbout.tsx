"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function StoryValuesAbout() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center h-full flex flex-col justify-center items-center"
        >
          <h2 className="text-3xl font-bold text-blue-800">A Nossa História</h2>
          <p className="text-gray-700 text-lg max-w-md mx-auto mt-8 mb-2 leading-relaxed px-4 bg-blue-50 rounded-xl shadow-sm italic py-2">
            Desde{" "}
            <span className="font-semibold text-blue-700">1995</span>, dedicamo-nos a
            transformar espaços e criar ambientes acolhedores para cada cliente.
            <br /> A nossa história é feita de{" "}
            <span className="font-semibold text-blue-700">projetos únicos</span>,
            relações de confiança e um compromisso constante com a excelência.
            <br /> Crescemos lado a lado com quem nos escolhe, sempre com{" "}
            <span className="font-semibold text-blue-700">paixão</span>,
            profissionalismo e atenção ao detalhe.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-left h-full flex flex-col justify-between"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Os Nossos Valores
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-4 bg-blue-50 rounded-xl px-4 py-3 shadow-sm hover:bg-blue-100 transition">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 text-blue-700 shadow">
                <FaCheckCircle className="text-2xl" />
              </span>
              <span className="font-medium">Qualidade acima de tudo</span>
            </li>
            <li className="flex items-center gap-4 bg-blue-50 rounded-xl px-4 py-3 shadow-sm hover:bg-blue-100 transition">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 text-blue-700 shadow">
                <FaCheckCircle className="text-2xl" />
              </span>
              <span className="font-medium">Respeito pelos prazos</span>
            </li>
            <li className="flex items-center gap-4 bg-blue-50 rounded-xl px-4 py-3 shadow-sm hover:bg-blue-100 transition">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 text-blue-700 shadow">
                <FaCheckCircle className="text-2xl" />
              </span>
              <span className="font-medium">Atendimento próximo e dedicado</span>
            </li>
            <li className="flex items-center gap-4 bg-blue-50 rounded-xl px-4 py-3 shadow-sm hover:bg-blue-100 transition">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 text-blue-700 shadow">
                <FaCheckCircle className="text-2xl" />
              </span>
              <span className="font-medium">Transparência e confiança</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
