import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ComboBox } from "@/components/customUi/ComboBox";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for categories
const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "apparel", label: "Apparel" },
  { value: "home-kitchen", label: "Home & Kitchen" },
  { value: "sports", label: "Sports" },
  { value: "beauty", label: "Beauty" },
];

const NewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    category: "",
    sku: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API
    console.log("New Product:", formData);
    // Navigate to the products page after submission
    navigate("/products");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (selectedCategory) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
    }));
  };

  return (
    <div className="flex p-10 justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl p-10 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Add New Product
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Container for Product Name and Brand */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700"
              >
                Product Brand
              </label>
              <Input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
                required
              />
            </div>
          </div>
          {/* Container for Price and Quantity */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <Input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
                required
              />
            </div>
          </div>
          {/* Category ComboBox */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <ComboBox
                data={categories}
                placeholder="Select category"
                onChange={handleCategoryChange}
                initialValue={formData.category}
                width="100%"
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-700"
              >
                SKU
              </label>
              <Input
                type="number"
                id="sku"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm hover:border-gray-500"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
