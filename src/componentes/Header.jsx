export default function Header({ total, totalGeral }) {
  return (
    <header className="text-center mb-12">
      <h1 className="titulo" >
        ⚔️ Brawl Stars
      </h1>
      <p className="text-[#8892b0] text-base mb-3">
        Escolha seu Brawler e entre na batalha!
      </p>
      <span className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-1 rounded-full text-xs font-semibold">
        {total === totalGeral
          ? `${totalGeral} Brawlers disponíveis`
          : `${total} de ${totalGeral} Brawlers`}
      </span>
    </header>
  );
}