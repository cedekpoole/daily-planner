import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/ItemList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Water the Plants", done: true },
  { id: 2, description: "Finish the project", done: false },
];

function App() {
  const [list, setList] = useState(initialItems);
  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form list={list} setList={setList} />
      <ItemsList initialItems={list} />
      <Stats stats={list} />
    </div>
  );
}

export default App;
