"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "João Silva",
    text: "Excelente trabalho! Profissionais muito atenciosos e cumpriram os prazos.",
    location: "Leiria",
  },
  {
    name: "Ana Martins",
    text: "Adorei o resultado final, a casa ficou impecável! Recomendo a 100%.",
    location: "Alcobaça",
  },
  {
    name: "Carlos Mendes",
    text: "Qualidade top e preços justos. Voltarei a contratar no futuro.",
    location: "Batalha",
  },
  {
    name: "Maria Gonçalves",
    text: "Trabalho impecável! A equipa foi super organizada e deixaram tudo limpo no final.",
    location: "Marinha Grande",
  },
  {
    name: "Pedro Santos",
    text: "A fachada da minha casa ficou como nova. Trabalho rápido e muito profissional.",
    location: "Caldas da Rainha",
  },
  {
    name: "Inês Rocha",
    text: "Gostei do acompanhamento desde o orçamento até à entrega final. Excelente comunicação.",
    location: "Porto de Mós",
  },
  {
    name: "Rui Almeida",
    text: "Deram ótimas sugestões de cores e materiais. A qualidade é visível!",
    location: "Nazaré",
  },
  {
    name: "Beatriz Ferreira",
    text: "Equipa simpática e cuidadosa. Cumpriram exatamente o prazo que tinham prometido.",
    location: "Lisboa",
  },
  {
    name: "André Correia",
    text: "Já contratei para duas obras e sempre fiquei satisfeito. Recomendo vivamente.",
    location: "Coimbra",
  },
  {
    name: "Carla Lopes",
    text: "Fizeram um trabalho detalhado no meu apartamento. Cada canto ficou perfeito.",
    location: "Faro",
  },
];

export default function ReviewsCarousel() {
	const [index, setIndex] = useState(0);

	const handleNext = () => setIndex((prev) => (prev + 1) % reviews.length);
	const handlePrev = () =>
		setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

	return (
		<section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
			<div className="max-w-4xl mx-auto text-center relative">
				<motion.h2
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ amount: 0.5 }}
					className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 drop-shadow"
				>
					O que dizem os nossos clientes
				</motion.h2>

				<div className="relative overflow-visible min-h-[220px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40, scale: 0.98 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -40, scale: 0.98 }}
							transition={{ duration: 0.5 }}
							viewport={{ amount: 0.5 }}
							className="bg-white/70 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl p-8 mx-auto max-w-xl flex flex-col items-center"
						>
							<p className="text-lg text-gray-700 mb-4 italic">
								"{reviews[index].text}"
							</p>
							<div className="font-bold text-blue-700 text-lg mb-3">
								{reviews[index].name}
							</div>
							<div className="text-blue-500 text-sm bg-blue-50 rounded-full px-3 py-1 shadow">
								{reviews[index].location}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Navigation arrows */}
				<div className="flex justify-center gap-6 mt-3">
					<motion.button
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ amount: 0.5 }}
						whileTap={{ scale: 0.9 }}
						onClick={handlePrev}
						className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 shadow transition"
						aria-label="Anterior"
					>
						<ChevronLeft className="text-blue-700" />
					</motion.button>
					<motion.button
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ amount: 0.5 }}
						whileTap={{ scale: 0.9 }}
						onClick={handleNext}
						className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 shadow transition"
						aria-label="Seguinte"
					>
						<ChevronRight className="text-blue-700" />
					</motion.button>
				</div>

				{/* Bullets */}
				<div className="flex justify-center gap-2 mt-6">
					{reviews.map((_, i) => (
						<motion.div
							key={i}
							layout
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								i === index
									? "bg-blue-600 scale-110 shadow"
									: "bg-blue-300"
							}`}
						></motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
