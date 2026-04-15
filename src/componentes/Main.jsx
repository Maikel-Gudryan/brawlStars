import Card from "./Card";

export default function Main({brawlers}){
    return(  
        <div>
            <main className="lista">
                {brawlers.map((brawler, index) => (
                <Card key={index} {...brawler} />
                ))}

                {brawlers.length === 0 && (
                <p className="semResultado">Nenhum Brawler encontrado 😢</p>
                )}
            </main>
    </div>
  );
}