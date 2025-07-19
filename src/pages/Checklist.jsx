import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text) {
      setItems([...items, { text, done: false }]);
      setText("");
    }
  };

  const toggleItem = index => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  return (
    <div>
      <h2>Checklist</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter item" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => toggleItem(index)} style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;