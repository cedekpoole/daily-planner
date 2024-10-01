import Item from "./Item";

export default function ItemList({ list, setList, sortOrder }) {
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

  const sortedList = [...list].sort((a, b) => {
    if (sortOrder === "done") {
      return a.done === b.done ? 0 : a.done ? -1 : 1;
    } else if (sortOrder === "undone") {
      return a.done === b.done ? 0 : a.done ? 1 : -1;
    } else {
      // Default (most recent first by id)
      return b.id + a.id;
    }
  });

  return (
    <div className="bg-[#7E827A] py-10 lg:py-24 flex flex-col gap-8 items-center">
      <ul className="list-none w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedList.map((item) => (
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
