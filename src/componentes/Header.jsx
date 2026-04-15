
export default function Header({ total }) {
    return (
        <div>
            <header className="header">
                <h1 className="titulo">⚔️ Brawl Stars</h1>
                <p className="subtitulo">Escolha seu Brawler e entre na batalha!</p>
                <span className="contador">{total} Brawlers disponíveis</span>
            </header>
        </div>
    );
}