export default function Input({ barra, setBarra }) {
  return (
    <input
      className="block mx-auto mb-6 px-5 py-2 w-72 rounded-full border border-white/15 bg-white/5 text-white text-sm outline-none placeholder-white/40 focus:border-yellow-400"
      type="text"
      value={barra}
      onChange={(e) => setBarra(e.target.value)}
      placeholder="Pesquise seu Brawler..."
    />
  );
}