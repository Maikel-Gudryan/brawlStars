import "./Card.css";
import { corRaridade, corClasse } from "./cores";

function Card({ nome, classe, raridade, descricao, imagem }) {

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