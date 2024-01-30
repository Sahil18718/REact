import React, { useState } from 'react';
// import './App.css';

function App() {
  // State to manage the list of items
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // State to manage the input field for adding new items
  const [newItem, setNewItem] = useState('');

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      // Create a new item object with a unique ID
      const newItemObject = { id: Date.now(), name: newItem };

      // Update the items state by adding the new item
      setItems((prevItems) => [...prevItems, newItemObject]);

      // Clear the input field
      setNewItem('');
    }
  };

  return (
    <div className="App">
      <h1>Simple React App</h1>

      <ul>
        {/* Map through the items and render them */}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Form for adding new items */}
      <div>
        <input
          type="text"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;

