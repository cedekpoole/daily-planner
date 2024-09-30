export default function Item({ item, toggleDone, removeItem }) {
  return (
    <li className="flex items-center gap-3">
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.id}. {item.description}
      </span>
      {item.done ? (
        <button
          onClick={() => removeItem(item.id)}
          className="cursor-pointer border-none text-2xl py-2 px-4 bg-slate-100 rounded transform hover:scale-105"
        >
          ❌
        </button>
      ) : (
        <button
          onClick={() => toggleDone(item.id)}
          className="cursor-pointer border-none bg-slate-100 text-2xl py-2 px-4 rounded transform hover:scale-105"
        >
          ✔️
        </button>
      )}
    </li>
  );
}
