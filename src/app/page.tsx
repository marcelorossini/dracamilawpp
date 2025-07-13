import Image from "next/image";
import "./pulse-button.css";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.webp"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-50"
        />
      </div>

      {/* Overlay para escurecer a imagem */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Conteúdo principal */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase">
            Atenção
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text drop-shadow-lg">
              ILHABELA
            </span>
            são as melhores ofertas do ano!
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme sua beleza com os tratamentos mais eficazes do mercado por preços imperdíveis.</p>

          {/* Features/Benefícios */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start text-white">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Ofertas Exclusivas</span>
            </div>

            <div className="flex items-center justify-center md:justify-start text-white">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Resultados Incríveis</span>
            </div>

            <div className="flex items-center justify-center md:justify-start text-white">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">Referencia na região</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="space-y-4 flex flex-col items-center justify-center" >
            <WhatsAppButton />

            <p className="text-sm text-gray-300 mt-4">
              🔥 Vagas limitadas • Acesso imediato
            </p>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute top-1/4 left-10 hidden lg:block">
            <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 right-16 hidden lg:block">
            <div className="w-3 h-3 bg-yellow-500 rounded-full opacity-40 animate-pulse delay-300"></div>
          </div>
          <div className="absolute bottom-1/4 left-20 hidden lg:block">
            <div className="w-2 h-2 bg-yellow-300 rounded-full opacity-50 animate-pulse delay-700"></div>
          </div>

        </div>
      </div>

      {/* Gradient overlay no bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-15"></div>
    </div>
  );
}
