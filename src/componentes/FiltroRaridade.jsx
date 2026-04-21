export function FiltroRaridade({ raridades, selecionadas, onToggle }) {
  return (
    <div className="mb-8">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-[#8892b0] mb-2">
        Raridade
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        {raridades.map((raridade) => (
          <button
            key={raridade}
            onClick={() => onToggle(raridade)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
              ${selecionadas.includes(raridade)
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 border-transparent text-[#1a1a2e] font-bold"
                : "bg-white/5 border-white/10 text-[#aab4d4] hover:bg-blue-700 hover:text-white"
              }`}
          >
            {raridade}
          </button>
        ))}
      </div>
    </div>
  );
}