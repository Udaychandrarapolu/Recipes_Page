import React from 'react';
import './Recipes.css';
import Recipe_details from "./Recipes.jsx";

const RecipesDisplay = () => {
  return (
    <div className="recipes-container">
      <h1 className="title">Featured Recipes</h1>
      <div className="recipes-grid">
        {Recipe_details.map((recipe) => (
          <div className="recipe-card fade-in" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-details">
              <h2 className="recipe-name">{recipe.name}</h2>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesDisplay;
