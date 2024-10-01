import Item from "./Item";

export default function ItemList({ list, setList }) {
  function toggleDone(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function removeItem(id) {
    setList(
      list
        .filter((item) => item.id !== id)
        .map((item, index) => ({ ...item, id: index + 1 }))
    );
  }

  return (
    <div className="bg-[#5a3e2b] text-[#ffebb3] py-10 flex flex-col gap-8 items-center">
      <ul className="list-none w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleDone={toggleDone}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
}
