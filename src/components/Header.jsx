export default function Header({ onClickTitle }) {
  return (
    <header className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 shadow-md sticky top-0 z-50">
      <h1
        className="text-3xl font-bold text-center cursor-pointer hover:opacity-90"
        onClick={onClickTitle}
      >
        🍴 Quick Recipe Ideas
      </h1>
    </header>
  );
}
