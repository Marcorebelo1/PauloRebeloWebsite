"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "Fazem orçamentos gratuitos?",
		answer: "Sim, todos os orçamentos são totalmente gratuitos e sem compromisso.",
	},
	{
		question: "Trabalham fora de Leiria?",
		answer: "Sim! Realizamos serviços de pintura em todo o território nacional.",
	},
	{
		question: "Quanto tempo demora uma obra típica?",
		answer:
			"Depende do tipo de serviço, mas a maioria das obras residenciais demora entre 2 e 5 dias.",
	},
	{
		question: "Que tipos de tinta utilizam?",
		answer:
			"Utilizamos uma variedade de tintas de alta qualidade, dependendo das necessidades do projeto e de quanto o cliente pretende investir.",
	},
];

export default function FAQAccordion() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="pt-8 pb-16 px-4 ">
			<div className="max-w-3xl mx-auto">
				
                <motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="space-y-6"
				>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10 drop-shadow">
                        Perguntas Frequentes
                    </h2>
                </motion.div>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="space-y-6"
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
							whileHover={{
								boxShadow: "0 8px 32px rgba(30,64,175,0.10)",
							}}
						>
							<button
								className="flex items-center justify-between w-full px-6 py-5 text-left font-semibold text-blue-800 focus:outline-none"
								onClick={() => toggleFAQ(index)}
							>
								<span>{faq.question}</span>
								<motion.span
									animate={{ rotate: activeIndex === index ? 180 : 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 15,
									}}
								>
									<ChevronDown className="w-6 h-6 text-blue-600" />
								</motion.span>
							</button>
							<AnimatePresence initial={false}>
								{activeIndex === index && (
									<motion.div
										initial={{ opacity: 0, maxHeight: 0 }}
										animate={{ opacity: 1, maxHeight: 300 }}
										exit={{ opacity: 0, maxHeight: 0 }}
										transition={{
											duration: 0.2,
										}}
										className="px-6 pb-5 text-gray-700 text-base overflow-hidden text-justify"
									>
										{faq.answer}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
