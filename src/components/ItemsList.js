import { useState } from "react";
import Item from "./Item";

export default function ItemsList({
  items,
  deleteItem,
  togglePackedItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList = [];
  if (sortBy === "input") sortedList = items;
  if (sortBy === "description")
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            togglePackedItem={togglePackedItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={clearList}>clear list</button>
      </div>
    </div>
  );
}
