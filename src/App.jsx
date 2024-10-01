import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/ItemList";
import Stats from "./components/Stats";

function App() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("todo-list");
    return savedList ? JSON.parse(savedList) : [];
  });

  const [sortOrder, setSortOrder] = useState("default"); // track the sort order

  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form list={list} setList={setList} />
      <ItemsList list={list} setList={setList} sortOrder={sortOrder} />
      <Stats stats={list} setSortOrder={setSortOrder} />
    </div>
  );
}

export default App;
