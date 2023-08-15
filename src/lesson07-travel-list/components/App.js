import { useState } from "react";
import "../style.css";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  // функция добавления item в массив items
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // функция удаления item из массива items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // функция смены состояния input галочка, или не галочка
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // функция очистки всего списка items
  function handleClearList() {
    // подтверждение удаления для пользователя
    const confirmed = window.confirm(
      "Are you sure you want ot delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
