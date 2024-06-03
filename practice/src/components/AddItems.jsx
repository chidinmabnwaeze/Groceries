import React from "react";

const addItems = () => {
  return (
    <form className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
      />
      <button type="submit" aria-label="Add Item">
        +
      </button>
    </form>
  );
};

export default addItems;
