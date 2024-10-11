function ListItem({ item, onDeleteItem, onChangeIsDone }) {
  return (
    <div className=" flex  justify-between p-4 my-8 w-80 bg-green-600 border-b-4 border-orange-400 cursor-pointer hover:bg-green-400">
      <p
        onClick={() => onChangeIsDone(item.id)}
        className={`  ${item.isDone && "line-through"} `}
      >
        {item.text}
      </p>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="bg-orange-300 py-0.5 px-3 hover:bg-red-500"
      >
        X
      </button>
    </div>
  );
}

export default ListItem;
