import { useState } from "react";
import { BrawlersData } from "./componentes/Data";
import Card from "./componentes/Card";
import "./App.css";
import { FiltroClasse, FiltroRaridade } from "./componentes/Filtro";

function App() {
  const [classeSelecionada, setClasseSelecionada] = useState ("Todos");
  const [raridadeSelecionada, setRaridadeSelecionada] = useState ("Todos");

  const classe = ["Todos", ...new Set(BrawlersData.map((b) => b.classe))];
  const raridade = ["Todos", ...new Set(BrawlersData.map((b) => b.raridade))];
  
  const brawlersFiltrar = BrawlersData
    .filter((b) => classeSelecionada === "Todos" || b.classe === classeSelecionada )
    .filter((b) => raridadeSelecionada === "Todos" || b.raridade === raridadeSelecionada);

  return (
    <div className="app">
      <header className="header">
        <h1 className="titulo">⚔️ Brawl Stars</h1>
        <p className="subtitulo">Escolha seu Brawler e entre na batalha!</p>
        <span className="contador">{BrawlersData.length} Brawlers disponíveis</span>
      </header>

      <FiltroClasse
        classe = {classe}
        selecionadaClasse = {classeSelecionada}
        onSelecionarClasse = {setClasseSelecionada}
      />

      <FiltroRaridade
        raridade = {raridade}
        selecinadaRaridade = {raridadeSelecionada}
        onSelecionarRaridade = {setRaridadeSelecionada}
      />

        <main className="lista">
          {brawlersFiltrar.length === 0 && (
       <p className="semResultado">Nenhum Brawler da Classe Encontrado</p> 
        )}
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
        
    
      </main>
    </div>
  );
}

export default App;