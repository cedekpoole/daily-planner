import Item from "./Item";

export default function ItemList({ initialItems }) {
  return (
    <div className="bg-[#5a3e2b] text-[#ffebb3] py-10 flex justify-between flex-col gap-8 items-center">
      <ul className="list-none w-4/5  grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 justify-center content-start">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
