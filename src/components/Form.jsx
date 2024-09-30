import { useState, useEffect } from "react";

export default function Form({ list, setList }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: list.length + 1,
      description,
      done: false,
    };

    setList([...list, newItem]);
    setDescription("");
  }

  return (
    <form
      className="bg-[#e5771f] py-10 flex items-center justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <h3 className="mr-7 text-4xl">What do you need to do today??</h3>
      <input
        type="text"
        className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-2"
        placeholder="Add a task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="cursor-pointer border-none text-3xl py-4 transform hover:scale-105">
        Add
      </button>
    </form>
  );
}
