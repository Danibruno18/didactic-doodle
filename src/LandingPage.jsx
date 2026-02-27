import React from 'react';

const LandingPage = () => {
  const catalogo = {
    camisetas: [
      { id: 1, nome: "Camiseta 'Tá Pago'", preco: "R$ 69,90", tag: "Engraçada", cor: "bg-blue-100" },
      { id: 2, nome: "Camiseta Floral Dark", preco: "R$ 79,90", tag: "Estética", cor: "bg-gray-800 text-white" },
      { id: 3, nome: "Camiseta 'Shape em Construção'", preco: "R$ 65,90", tag: "Engraçada", cor: "bg-yellow-100" },
    ],
    tops: [
      { id: 4, nome: "Top Cruzado Neon", preco: "R$ 59,90", tag: "Estética", cor: "bg-pink-100" },
      { id: 5, nome: "Top 'Foca no Treino'", preco: "R$ 54,90", tag: "Engraçada", cor: "bg-purple-100" },
      { id: 6, nome: "Top Minimalista", preco: "R$ 69,90", tag: "Estética", cor: "bg-zinc-200" },
    ],
    calcas: [
      { id: 7, nome: "Calça Jogger Confort", preco: "R$ 119,90", tag: "Estética", cor: "bg-stone-200" },
      { id: 8, nome: "Calça Moletom 'Dia de Perna'", preco: "R$ 109,90", tag: "Engraçada", cor: "bg-red-100" },
    ],
    leggings: [
      { id: 9, nome: "Legging Estampa Galáxia", preco: "R$ 89,90", tag: "Estética", cor: "bg-indigo-900 text-white" },
      { id: 10, nome: "Legging 'Agacha que Cresce'", preco: "R$ 79,90", tag: "Engraçada", cor: "bg-green-100" },
    ],
    bermudas: [
      { id: 11, nome: "Bermuda Térmica Clássica", preco: "R$ 64,90", tag: "Estética", cor: "bg-gray-300" },
      { id: 12, nome: "Bermuda 'Fugindo do Cardio'", preco: "R$ 69,90", tag: "Engraçada", cor: "bg-orange-100" },
    ]
  };

  const SecaoProdutos = ({ titulo, produtos, id }) => (
    <section id={id} className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-500 pb-2 inline-block">
        {titulo}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
            <div className={`h-64 flex items-center justify-center ${produto.cor}`}>
              <span className="font-semibold opacity-70">Imagem da Estampa</span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{produto.nome}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${produto.tag === 'Engraçada' ? 'bg-yellow-200 text-yellow-800' : 'bg-purple-200 text-purple-800'}`}>
                  {produto.tag}
                </span>
              </div>
              <p className="text-xl font-extrabold text-indigo-600 mt-4">{produto.preco}</p>
              <button className="w-full mt-4 bg-gray-900 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80 mix-blend-multiply"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Treine com <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Estilo</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Humor</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200">
            A loja definitiva para quem leva o treino a sério, mas não perde a piada. Descubra nossas estampas exclusivas.
          </p>
          <div className="flex gap-4">
            <a href="#camisetas" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Ver Coleção
            </a>
            <a href="#lancamentos" className="bg-transparent border border-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition duration-300">
              Lançamentos
            </a>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-white shadow-md z-50">
        <ul className="flex overflow-x-auto gap-6 px-4 py-4 max-w-7xl mx-auto text-sm font-semibold text-gray-600 justify-start md:justify-center">
          <li><a href="#camisetas" className="hover:text-indigo-600 transition-colors">Camisetas</a></li>
          <li><a href="#tops" className="hover:text-indigo-600 transition-colors">Tops</a></li>
          <li><a href="#calcas" className="hover:text-indigo-600 transition-colors">Calças</a></li>
          <li><a href="#leggings" className="hover:text-indigo-600 transition-colors">Leggings</a></li>
          <li><a href="#bermudas" className="hover:text-indigo-600 transition-colors">Bermudas</a></li>
        </ul>
      </nav>

      <main>
        <SecaoProdutos titulo="Camisetas" produtos={catalogo.camisetas} id="camisetas" />
        <div className="bg-gray-100">
          <SecaoProdutos titulo="Tops" produtos={catalogo.tops} id="tops" />
        </div>
        <SecaoProdutos titulo="Calças" produtos={catalogo.calcas} id="calcas" />
        <div className="bg-gray-100">
          <SecaoProdutos titulo="Leggings" produtos={catalogo.leggings} id="leggings" />
        </div>
        <SecaoProdutos titulo="Bermudas" produtos={catalogo.bermudas} id="bermudas" />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; 2026 GymStyle & Humor. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
