import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/ItemList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
