import { useState } from "react";
import ListItem from "./ListItem";

const initialItems = [
  { id: 1, text: "iş bul", isDone: true },
  { id: 2, text: "tecrübe edin", isDone: true },
  { id: 3, text: "cem", isDone: false },
];
function Todo() {
  const [items, setItems] = useState(initialItems);
  const [newItemText, setNewItemText] = useState("");

  //Delete Item
  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  }

  //Add new Item
  function handleAddItem() {
    //guard func.
    if (newItemText === "") {
      alert("Please write something");
      return;
    }

    const newItem = { id: Date.now(), text: newItemText, isDone: false };
    setItems((items) => [...items, newItem]);
  }

  //ÜSTÜNE BASINCA ÇİZ VEYA ÇİZGİYİ KALDIR
  function handleChangeIsDone(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setItems(updatedItems);
  }
  return (
    <div className="bg-yellow-400 p-8 h-[600px] w-[500px] flex flex-col items-center gap-16">
      <div className="flex flex-col items-center gap-y-4">
        <h1>Todo List App</h1>
        <input
          className="px-2 py-1.5"
          type="text"
          placeholder="Add an item..."
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="bg-orange-400 px-10 py-1 font-semibold"
        >
          Add
        </button>
      </div>

      <div className=" overflow-y-scroll">
        {items.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItem={handleDeleteItem}
            onChangeIsDone={handleChangeIsDone}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
