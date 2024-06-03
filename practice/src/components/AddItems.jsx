import React from "react";

const addItems = ({newSubmit, setNewSubmit, handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newSubmit}
        onChange={(e)=>setNewSubmit(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        +
      </button>
    </form>
  );
};

export default addItems;
