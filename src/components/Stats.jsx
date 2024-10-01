export default function Stats({ stats, setSortOrder }) {
  if (!stats.length) {
    return (
      <footer className="bg-[#000000] text-[#f9f9f9] border-t-1 text-center font-bold py-8">
        <em>Start adding some tasks to your list!</em>
      </footer>
    );
  }
  const itemsDone = stats.filter((item) => item.done).length;
  const percentage = (itemsDone / stats.length) * 100;

  function handleSortChange(e) {
    setSortOrder(e.target.value);
  }

  return (
    <footer className="bg-[#000000] text-[#f9f9f9] border-t-1 text-center font-bold py-8">
      <em>
        {percentage === 100
          ? `Congratulations! You have completed all ${
              stats.length === 1 ? "" : stats.length
            } tasks!`
          : `You have ${
              stats.length
            } items in your list, and you already have done 
        ${itemsDone} (${percentage.toFixed(0) | 0}%)`}
      </em>
      <label className="block my-4">Sort By...</label>
      <select
        onChange={handleSortChange}
        className="block w-1/2 mx-auto p-2 rounded-lg text-[#000000] bg-[#f9f9f9]"
      >
        <option value="default">DEFAULT</option>
        <option value="done">SORT BY DONE FIRST</option>
        <option value="undone">SORT BY DONE LAST</option>
      </select>
    </footer>
  );
}
