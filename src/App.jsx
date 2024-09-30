import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/ItemList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Water the Plants", done: true },
  { id: 2, description: "Finish the project", done: false },
];

function App() {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats stats={initialItems} />
    </div>
  );
}

export default App;
