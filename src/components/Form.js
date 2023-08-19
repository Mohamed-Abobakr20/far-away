import { useState } from "react";

export default function Form({ addItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setItem] = useState("");
  const [id, setId] = useState(0);

  function handleForm(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      quantity,
      description,
      packed: false,
      id: id,
    };
    addItems(newItem);
    setItem("");
    setQuantity(1);
    setId((id) => id + 1);
  }

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
