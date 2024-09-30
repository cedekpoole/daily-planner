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

  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form list={list} setList={setList} />
      <ItemsList list={list} setList={setList} />
      <Stats stats={list} />
    </div>
  );
}

export default App;
