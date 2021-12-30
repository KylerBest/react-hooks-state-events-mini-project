import React from "react";

function CategoryFilter({categories, onCategorySelect, selectedCategory}) {

  const categoryButtons = categories.map(category =>
    <button 
      className={category === selectedCategory ? "selected" : ""} 
      key={category} 
      onClick={() => onCategorySelect(category)}
    >
      {category}
    </button>
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
