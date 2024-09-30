export default function Stats({ stats }) {
  const itemsDone = stats.filter((item) => item.done).length;

  return (
    <footer className="bg-[#76c7ad] text-center font-bold py-8">
      <em>
        You have {stats.length} items in your list, and you already have done{" "}
        {itemsDone} ({(itemsDone / stats.length) * 100}%)
      </em>
    </footer>
  );
}
