import { useEffect, useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "./api/api";

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const fetchItems = async () => {
    const res = await getItems();
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (data) => {
    if (editItem) {
      await updateItem(editItem._id, data);
      setEditItem(null);
    } else {
      await createItem(data);
    }
    fetchItems();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-center">CRUD App</h1>

        <ItemForm onSubmit={handleSubmit} editItem={editItem} />

        <ItemList
          items={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;