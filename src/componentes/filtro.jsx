import "./filtro.css";

export const FiltroClasse = ({ classe, selecionarClasse, onSelecionarClasse }) => {
  return (
    <div className="filtro">
      {classe.map((categoria) => (
        <button
          key={categoria}
          className={`filtroBtn ${selecionarClasse === categoria ? "ativo" : ""}`}
          onClick={() => onSelecionarClasse(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
};

export const FiltroRaridade = ({ raridade, selecionarRaridade, onSelecionarRaridade }) => {
  return (
    <div className="filtro">
      {raridade.map((item) => (
        <button
          key={item}
          className={`filtroBtn ${selecionarRaridade === item ? "ativo" : ""}`}
          onClick={() => onSelecionarRaridade(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};