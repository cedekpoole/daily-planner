import { useState } from "react";

export default function Stats({ stats }) {
  const [sortOrder, setSortOrder] = useState("default"); // track the sort order

  const itemsDone = stats.filter((item) => item.done).length;

  function handleSortChange(e) {
    setSortOrder(e.target.value);
  }

  return (
    <footer className="bg-[#000000] text-[#f9f9f9] border-t-1 text-center font-bold py-8">
      <em>
        You have {stats.length} items in your list, and you already have done{" "}
        {itemsDone} ({((itemsDone / stats.length) * 100).toFixed(0) | 0}%)
      </em>
      <label className="block my-4">Sort By...</label>
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="block w-1/2 mx-auto p-2 rounded-lg text-[#000000] bg-[#f9f9f9]"
      >
        <option value="default">Most Recent</option>
        <option value="done">Done First</option>
        <option value="undone">Done Last</option>
      </select>
    </footer>
  );
}
