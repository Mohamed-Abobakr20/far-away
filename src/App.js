import { useState } from "react";
import { useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items"))
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function togglePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <ItemsList
        items={items}
        deleteItem={deleteItem}
        togglePackedItem={togglePackedItem}
        clearList={clearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
