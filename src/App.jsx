import { useState } from "react";
import { BrawlersData } from "./componentes/Data";
import "./App.css";
import { FiltroClasse, FiltroRaridade } from "./componentes/Filtro";
import Main from "./componentes/Main";
import Header from "./componentes/Header";

function App() {
  const [classeSelecionada, setClasseSelecionada] = useState("Todos");
  const [raridadeSelecionada, setRaridadeSelecionada] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  const classe = ["Todos", ...new Set(BrawlersData.map((b) => b.classe))];
  const raridade = ["Todos", ...new Set(BrawlersData.map((b) => b.raridade))];

  const brawlersFiltrar = BrawlersData
    .filter((b) => classeSelecionada === "Todos" || b.classe === classeSelecionada)
    .filter((b) => raridadeSelecionada === "Todos" || b.raridade === raridadeSelecionada)
    .filter((b) => b.nome?.toLowerCase().startsWith(pesquisa.toLowerCase()));

  return (
    <div className="app">

      <Header
        total={BrawlersData.length} 
      />

      <input 
        type="text"
        value = {pesquisa}
        onChange = {(e) => setPesquisa(e.target.value)}
        className = "barraPesquisa"
        placeholder = "Pesquise seu Brawler..."
       >
       </input> 

      <FiltroClasse
        classe = {classe}
        selecionarClasse = {classeSelecionada}
        onSelecionarClasse = {setClasseSelecionada}
      />

      <FiltroRaridade
        raridade = {raridade}
        selecionarRaridade = {raridadeSelecionada}
        onSelecionarRaridade = {setRaridadeSelecionada}
      />

      <Main
        brawlers={brawlersFiltrar} 
      />
    </div>
  );
}

export default App;