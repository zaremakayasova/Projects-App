import React, { useState } from "react";
import "./MenuContainer.css";
import menu from "../data";
import MenuItem from "../MenuItem/MenuItem";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const MenuContainer = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <hr />
      <div className="menu-buttons">
        {categories.map((category, index) => (
          <button key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="menu">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
