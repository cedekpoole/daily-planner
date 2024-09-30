export default function Item({ item }) {
  return (
    <li className="flex items-center gap-3">
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.id}. {item.description}
      </span>
      {item.done ? (
        <button className="cursor-pointer border-none text-xl py-2 transform hover:scale-105">
          ❌
        </button>
      ) : (
        <button className="cursor-pointer border-none text-xl py-2 transform hover:scale-105">
          ✔️
        </button>
      )}
    </li>
  );
}
