export default function Item({ item }) {
  return (
    <li className="flex items-center gap-3">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="cursor-pointer border-none text-xl py-2 transform hover:scale-105">
        ❌
      </button>
    </li>
  );
}
