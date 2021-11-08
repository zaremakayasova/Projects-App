import React from "react";
import "./MenuContainer.css";
import menu from "../data";
import MenuItem from "../MenuItem/MenuItem";

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <hr />
      <div className='menu-buttons'>
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Shakes</button>
      </div>
      <div className="menu">
        {menu.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
