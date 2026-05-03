import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetail.css';

function RecipeDetail({ apiKey }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch with useEffect when component loads
  useEffect(() => {
    setLoading(true);
    setError('');

    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'failure') {
          setError(data.message || 'Could not load recipe.');
        } else {
          setRecipe(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Network error. Please try again.');
        setLoading(false);
      });
  }, [id, apiKey]);

  if (loading) return <p className="detail-loading">Loading recipe...</p>;
  if (error)   return <p className="detail-error">{error}</p>;
  if (!recipe) return null;

  // Strip HTML tags from instructions
  const instructions = recipe.instructions
    ? recipe.instructions.replace(/<[^>]+>/g, '')
    : 'No instructions available.';

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to results
      </button>

      <h2 className="detail-title">{recipe.title}</h2>

      {recipe.image && (
        <img className="detail-img" src={recipe.image} alt={recipe.title} />
      )}

      <div className="detail-meta">
        {recipe.readyInMinutes && (
          <span>⏱ Ready in {recipe.readyInMinutes} minutes</span>
        )}
        {recipe.servings && (
          <span>🍽 Serves {recipe.servings}</span>
        )}
      </div>

      <h3 className="detail-section-title">Ingredients</h3>
      <ul className="ingredients-list">
        {(recipe.extendedIngredients || []).map((ing, idx) => (
          <li key={ing.id || idx}>{ing.original}</li>
        ))}
      </ul>

      <h3 className="detail-section-title">Instructions</h3>
      <p className="instructions-text">{instructions}</p>

      {recipe.sourceUrl && (
        <a
          className="source-link"
          href={recipe.sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          View full recipe on source site →
        </a>
      )}
    </div>
  );
}

export default RecipeDetail;
