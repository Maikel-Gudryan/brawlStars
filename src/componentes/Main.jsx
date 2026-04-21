import Card from "./Card";

export default function Main({ brawlers }) {
  return (
    <main className="flex flex-wrap gap-6 justify-center p-4">
      {brawlers.map((brawler) => (
        <Card key={brawler.id} {...brawler} />
      ))}

      {brawlers.length === 0 && (
        <p className="text-[#8892b0] text-base text-center w-full py-10">
          Nenhum Brawler encontrado 😢
        </p>
      )}
    </main>
  );
}