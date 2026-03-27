import { useState, useEffect } from "react";

const ItemForm = ({ onSubmit, editItem }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (editItem) {
      setForm(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", price: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {editItem ? "Update Item" : "Create Item"}
      </h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {editItem ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ItemForm;