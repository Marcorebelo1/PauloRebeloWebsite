import { motion } from "framer-motion";
import { FaPhoneAlt, FaClipboardList, FaPaintRoller, FaHandshake } from "react-icons/fa";

const passos = [
  {
    titulo: "Contacto Inicial",
    descricao: "Entramos em contacto consigo para perceber as suas necessidades.",
    icone: <FaPhoneAlt className="text-xl sm:text-2xl text-white" />,
  },
  {
    titulo: "Visita & Orçamento",
    descricao: "Fazemos uma visita ao local e apresentamos um orçamento detalhado.",
    icone: <FaClipboardList className="text-xl sm:text-2xl text-white" />,
  },
  {
    titulo: "Execução da Obra",
    descricao: "Equipa experiente realiza o serviço com qualidade e limpeza.",
    icone: <FaPaintRoller className="text-xl sm:text-2xl text-white" />,
  },
  {
    titulo: "Entrega Final",
    descricao: "Revisão e entrega com garantia e total satisfação.",
    icone: <FaHandshake className="text-xl sm:text-2xl text-white" />,
  },
];

export default function ComoTrabalhamos() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">O Nosso Método de Trabalho</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {passos.map((passo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-6 flex-1 text-center min-w-[250px]"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                {passo.icone}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{passo.titulo}</h3>
              <p className="text-sm text-gray-800">{passo.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
