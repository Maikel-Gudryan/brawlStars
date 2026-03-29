import { BrawlersData } from "./Data";
import Card from "./Card";
import "./App.css";
 
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="titulo">⚔️ Brawl Stars</h1>
        <p className="subtitulo">Escolha seu Brawler e entre na batalha!</p>
        <span className="contador">{BrawlersData.length} Brawlers disponíveis</span>
      </header>
 
        <main className="lista">
          {BrawlersData.map((brawler) => (
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