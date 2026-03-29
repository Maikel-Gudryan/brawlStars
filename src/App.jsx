import { BrawlersData } from "./Data";
import Card from "./components/Card";
import "./App.css";
 
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="titulo">⚔️ Brawl Stars</h1>
        <p className="subtitulo">Escolha seu Brawler e entre na batalha!</p>
        <span className="contador">{brawlers.length} Brawlers disponíveis</span>
      </header>
 
    </div>
  );
}