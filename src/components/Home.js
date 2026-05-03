import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ apiKey }) {
  const [query, setQuery] = useState('pasta');
  const [inputVal, setInputVal] = useState('pasta');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch with useEffect when query changes (component loads or search triggered)
  useEffect(() => {
    setLoading(true);
    setError('');

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${encodeURIComponent(query)}&number=12`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'failure') {
          setError(data.message || 'API error. Check your API key.');
        } else {
          setRecipes(data.results || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Network error. Please try again.');
        setLoading(false);
      });
  }, [query, apiKey]);

  // Handle search button click — updates query state which triggers useEffect
  function handleSearch(e) {
    e.preventDefault();
    if (inputVal.trim()) {
      setQuery(inputVal.trim());
    }
  }

  return (
    <div>
      <hr className="divider" />

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">SEARCH</button>
      </form>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading recipes...</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
