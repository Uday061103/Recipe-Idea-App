import { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  // ✅ Fetch meals by ingredient
  async function fetchMealsByIngredient(ingredient) {
    if (!ingredient?.trim()) {
      fetchRandomMeals(); // fallback to random recipes
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          ingredient.trim()
        )}`
      );
      if (!res.ok) throw new Error(`Network error ${res.status}`);
      const data = await res.json();
      setMeals(data?.meals ?? []);
      if (!data?.meals) {
        setError(`No recipes found for "${ingredient}".`);
      }
    } catch (e) {
      setError("Error fetching recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ✅ Fetch full recipe details for modal
  async function fetchMealDetails(idMeal) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setSelected(data.meals?.[0] ?? null);
    } catch (e) {
      setError("Unable to load recipe details.");
    }
  }

  // ✅ Fetch random meals (6 at a time)
  async function fetchRandomMeals() {
    setLoading(true);
    setError("");
    try {
      let randomMeals = [];
      for (let i = 0; i < 6; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals) randomMeals.push(data.meals[0]);
      }
      setMeals(randomMeals);
      setQuery(""); // clear search bar
    } catch (err) {
      setError("Failed to fetch random recipes.");
    }
    setLoading(false);
  }

  // ✅ Load random meals on first mount
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header clickable → resets to random recipes */}
      <Header onClickTitle={fetchRandomMeals} />

      {/* Search bar works with Enter + button */}
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchMealsByIngredient} />

      {loading && <p className="text-center">Loading recipes...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} onClick={fetchMealDetails} />
        ))}
      </div>

      {selected && (
        <RecipeModal meal={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
