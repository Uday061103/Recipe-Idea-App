export default function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6 mb-8"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search by a single ingredient (e.g., chicken, tomato)"
        className="border p-3 rounded-l-lg w-72 sm:w-96 focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 rounded-r-lg shadow transition"
      >
        Search
      </button>
    </form>
  );
}
