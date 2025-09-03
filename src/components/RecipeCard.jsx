// RecipeCard.jsx
export default function RecipeCard({ meal, onClick }) {
  return (
    <div
      className="bg-white border rounded-xl shadow hover:shadow-xl cursor-pointer overflow-hidden transform hover:scale-105 transition duration-200"
      onClick={() => onClick(meal.idMeal)}
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{meal.strMeal}</h3>
        <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
          Tap for details
        </span>
      </div>
    </div>
  );
}
