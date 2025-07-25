"use client";
import { motion } from "framer-motion";

const team = [
  { name: "Paulo Rebelo", role: "Fundador & CEO", img: "/assets/pessoas/PauloRebelo.jpg" },
  { name: "Colaborador", img: "/assets/pessoas/nophoto.jpg" },
  { name: "Colaborador", img: "/assets/pessoas/nophoto.jpg" },
  { name: "Colaborador", img: "/assets/pessoas/nophoto.jpg" },
];

export default function TeamAbout() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 drop-shadow text-center"
      >
        A Nossa Equipa
      </motion.h2>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-6"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full max-w-[240px] aspect-square rounded-xl object-cover mb-6 shadow-md"
            />
            <h3 className="text-xl md:text-2xl text-blue-700 mb-2 font-semibold text-center">
              {member.name}
            </h3>
            {member.role && (
              <p className="text-gray-600 text-base text-center">{member.role}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
