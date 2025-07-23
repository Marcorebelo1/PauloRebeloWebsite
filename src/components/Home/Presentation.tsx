
export default function Presentation() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-10 md:py-20 px-2 sm:px-4 max-w-4xl md:max-w-7xl mx-auto">
      {/* Text Left */}
      <div className="flex-1 w-full text-center md:text-left space-y-5 md:space-y-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
          Bem-vindo à <span className="text-cyan-500">Empresa Pintura</span>
        </h2>
        <p className="text-gray-700 text-base xs:text-lg md:text-xl max-w-xs xs:max-w-sm md:max-w-md mx-auto md:mx-0">
          Especialistas em transformar ambientes com qualidade, elegância e atenção ao detalhe. Mais de 20 anos de experiência em pintura de interiores e exteriores.
        </p>
        <a href="/servicos" className="inline-block mt-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow hover:from-cyan-400 hover:to-blue-600 transition-all text-sm md:text-base">
          Conheça nossos serviços
        </a>
      </div>
      {/* Photo Right */}
      <div className="flex-1 w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="w-40 h-40 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 flex items-center justify-center">
          <img
            src="/assets/astro.svg"
            alt="Equipe de pintura profissional"
            className="object-cover w-full h-full"
            style={{ filter: 'grayscale(0.1) contrast(1.1)' }}
          />
        </div>
      </div>
    </section>
  );
}
