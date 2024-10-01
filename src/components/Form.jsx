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
      className="bg-[#703030] py-10 border-y-2 shadow-md  flex flex-wrap items-center justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <h3 className="lg:mr-7 text-4xl text-[#f9f9f9]">
        What do you need to do today??
      </h3>
      <div className="gap-2 flex">
        <input
          type="text"
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-2"
          placeholder="Add a task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="cursor-pointer border-none rounded bg-slate-100 px-4 text-3xl py-5 transform hover:scale-105">
          Add
        </button>
      </div>
    </form>
  );
}
