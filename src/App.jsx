import { useState } from "react";
import { BrawlersData } from "./componentes/Data";
import Card from "./componentes/Card";
import "./App.css";

function App() {
  const [classeSelecionada, setClasseSelecionada] = useState ("Todos");

  const classe = ["Todos", ...new Set(BrawlersData.map((b) => b.classe))];

  const brawlersFiltrar = classeSelecionada === "Todos" ? BrawlersData : BrawlersData.filter((b) => b.classe === classeSelecionada);
 

  return (
    <div className="app">
      <header className="header">
        <h1 className="titulo">⚔️ Brawl Stars</h1>
        <p className="subtitulo">Escolha seu Brawler e entre na batalha!</p>
        <span className="contador">{BrawlersData.length} Brawlers disponíveis</span>
      </header>

      <div className="filtro">
          {classe.map((classe) => (
          <button
            key={"classe"}
            className={`filtro-btn ${classeSelecionada === classe ? "ativo" : ""}`}
            onClick={() => setClasseSelecionada(classe)}
          > 
            {classe}
          </button>
        ))}
      </div>

        <main className="lista">
          {brawlersFiltrar.map((brawler) => (
          <Card
            key={brawler.id}
            nome={brawler.nome}
            classe={brawler.classe}
            raridade={brawler.raridade}
            descricao={brawler.descricao}
            imagem={brawler.imagem}
          />
        ))}
        {brawlersFiltrar.length === 0 && (
        <p className="Sem-Resultado">Nenhum Brawler da Classe Encontrado</p>
        )}

       


    
      </main>
    </div>
  );
}

export default App;