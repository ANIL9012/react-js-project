import React, { useState } from "react";
import "./Crud.css";

export default function CrudCard() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updated = [...cards];
      updated[editIndex] = input;
      setCards(updated);
      setEditIndex(null);
    } else {
      setCards([...cards, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(cards[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = cards.filter((_, i) => i !== index);
    setCards(updated);
    if (editIndex === index) setEditIndex(null);
  };

  const filteredCards = cards.filter((card) =>
    card.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="Maincontainer">
        <h2>CRUD</h2>
        <input
          type="text"
          placeholder="Add or Edit card text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
        <br />
        <br />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="wrapper">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <div key={index}>
                <strong>{card}</strong>
                <div className="wrapper2">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
    </>
  );
}
