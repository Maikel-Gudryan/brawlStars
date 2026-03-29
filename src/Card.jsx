import "./Card.css";

function Card({ nome, classe, raridade, descricao, imagem}) {
  const corRaridade = {
    Inicial: "#9e9e9e",
    Raro: "#4caf50",
    "Super-Raro": "#2196f3",
    Epico: "#a018b8",
    Mítico: "#ff5722",
    Lendário: "#ffd700",
    "Ultra-Lendário": "#000000"
};
 
  const corClasse = {
    Destruidores: "#e53935",
    "Tiro-Preciso": "#1e88e5",
    Tanque: "#ce856d",
    Suporte: "#43a047",
    Algoz: "#8e24aa",
    Detonadores: "#fb8c00",
  };
 
  return (
    <div className="card">
      <div className="card-header" style={{ borderColor: corClasse[classe] || "#444" }}>
        <img
          className="card-imagem"
          src={imagem}
          alt={nome}
          onError={(e) => {
            e.target.src = "https://placehold.co/120x120/1a1a2e/ffffff?text=" + nome[0];
          }}
        />
        <div className="card-titulo">
          <h2 className="card-nome">{nome}</h2>
          <span className="card-classe" style={{ backgroundColor: corClasse[classe] || "#444" }}>
           
            {classe}
          </span>
        </div>
      </div>
      <div className="card-body">
        <p className="card-descricao">{descricao}</p>
      </div>
      <div
        className="card-raridade"
        style={{ backgroundColor: corRaridade[raridade] || "#444" }}
      >
        {raridade}
      </div>
    </div>
  );
}

export default Card;