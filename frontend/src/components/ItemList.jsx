const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {items.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-md rounded-2xl p-4"
        >
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-gray-600">₹ {item.price}</p>
          <p className="text-sm text-gray-500">{item.description}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => onEdit(item)}
              className="flex-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(item._id)}
              className="flex-1 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;