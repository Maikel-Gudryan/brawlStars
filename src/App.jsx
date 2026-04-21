import { useState } from "react";
import { BrawlersData } from "./componentes/Data";
import "./App.css";
import { FiltroClasse } from "./componentes/FiltroClasse";
import { FiltroRaridade } from "./componentes/FiltroRaridade";
import Main from "./componentes/Main";
import Header from "./componentes/Header";
import Input from "./componentes/Input";

function App() {
  const [classesSelecionadas, setClassesSelecionadas] = useState([]);
  const [raridadesSelecionadas, setRaridadesSelecionadas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const classes = [...new Set(BrawlersData.map((b) => b.classe))];
  const raridades = [...new Set(BrawlersData.map((b) => b.raridade))];

  function toggleClasse(classe) {
    setClassesSelecionadas((prev) =>
      prev.includes(classe)
        ? prev.filter((c) => c !== classe)
        : [...prev, classe]
    );
  }

  function toggleRaridade(raridade) {
    setRaridadesSelecionadas((prev) =>
      prev.includes(raridade)
        ? prev.filter((r) => r !== raridade)
        : [...prev, raridade]
    );
  }

  const brawlersFiltrados = BrawlersData
    .filter((b) =>
      classesSelecionadas.length === 0 || classesSelecionadas.includes(b.classe)
    )
    .filter((b) =>
      raridadesSelecionadas.length === 0 || raridadesSelecionadas.includes(b.raridade)
    )
    .filter((b) =>
      b.nome.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      b.classe.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      b.raridade.toLowerCase().startsWith(pesquisa.toLowerCase())
    );

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">

      <Header 
        total={brawlersFiltrados.length} 
        totalGeral={BrawlersData.length} 
      />
      
      <Input 
        barra={pesquisa} 
        setBarra={setPesquisa} 
      />
      
      <FiltroClasse 
        classes={classes} 
        selecionadas={classesSelecionadas} 
        onToggle={toggleClasse} 
      />
      
      <FiltroRaridade 
        raridades={raridades} 
        selecionadas={raridadesSelecionadas} 
        onToggle={toggleRaridade} 
      />
      
      <Main 
        brawlers={brawlersFiltrados} 
      />

    </div>
  );
}

export default App;