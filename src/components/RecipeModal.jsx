// RecipeModal.jsx
export default function RecipeModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-sm text-gray-500 mb-2">
          <strong>Category:</strong> {meal.strCategory} | <strong>Area:</strong>{" "}
          {meal.strArea}
        </p>
        <h3 className="mt-4 font-semibold text-lg">Instructions</h3>
        <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
}
