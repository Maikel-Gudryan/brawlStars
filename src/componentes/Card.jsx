import { corRaridade, corClasse } from "../constants/cores";

function Card({ nome, classe, raridade, descricao, imagem }) {

  return (
    <div className="flex flex-col w-60 rounded-2xl border border-[#2a2a5a] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] bg-gradient-to-br from-[rgb(30,30,58)] to-[#16213e] transition-transform duration-200 
    hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-3 p-4 border-b-2 border-[#444] bg-white/5" style={{ borderColor: corClasse[classe] || "#444" }}>
        <img
          className="w-16 h-16 object-contain p-1 flex-shrink-0"
          src={imagem}
          alt={nome}
          onError={(e) => {
            e.target.src = "https://placehold.co/120x120/1a1a2e/ffffff?text=" + nome[0];
          }}
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-lg font-bold tracking-wide">{nome}</h2>
          <span className="text-white text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full" 
          style={{ backgroundColor: corClasse[classe] || "#444" }}
          >
            {classe}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 flex-1">
        <p className="text-[#aab4d4] text-xs leading-relaxed">{descricao}</p>
      </div>
      <div
        className="text-center py-1.5 text-xs font-bold uppercase tracking-widest text-white"
        style={{ backgroundColor: corRaridade[raridade] || "#444" }}
      >
        {raridade}
      </div>
    </div>
  );
}

export default Card;