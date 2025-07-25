import { motion } from "framer-motion";

const projetos = [
  {
    imagem: "/projetos/pintura-interior1.jpg",
    titulo: "Apartamento em Lisboa",
  },
  {
    imagem: "/projetos/fachada-exterior1.jpg",
    titulo: "Fachada em Coimbra",
  },
  {
    imagem: "/projetos/papel-parede1.jpg",
    titulo: "Papel de parede em Porto",
  },
  {
    imagem: "/projetos/escritorio1.jpg",
    titulo: "Escritório moderno",
  },
  {
    imagem: "/projetos/moradia1.jpg",
    titulo: "Moradia em Leiria",
  },
  // adiciona mais imagens conforme necessário
];

export default function GaleriaTrabalhos() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Outros Trabalhos Realizados
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projetos.map((proj, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300 group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={proj.imagem}
                alt={proj.titulo}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium px-2 py-1">
                {proj.titulo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
