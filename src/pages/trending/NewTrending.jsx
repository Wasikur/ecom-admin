import { Button } from "@/components/ui/button";
import { ComboBox } from "@/components/customUi/ComboBox"; // Assuming ComboBox is correctly exported
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for categories and products
const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "apparel", label: "Apparel" },
  { value: "home-kitchen", label: "Home & Kitchen" },
  { value: "sports", label: "Sports" },
  { value: "beauty", label: "Beauty" },
];

const products = [
  { value: "iphone-14", label: "iPhone 14" },
  { value: "nike-air-max", label: "Nike Air Max" },
  { value: "samsung-galaxy", label: "Samsung Galaxy" },
  { value: "blender", label: "Blender" },
  { value: "lipstick", label: "Lipstick" },
];

const NewTrending = () => {
  const [formData, setFormData] = useState({
    category: "",
    product: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API
    console.log("New Trending Product:", formData);
    // Navigate to the trending products page after submission
    navigate("/trending");
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

  const handleProductChange = (selectedProduct) => {
    setFormData((prevData) => ({
      ...prevData,
      product: selectedProduct,
    }));
  };

  return (
    <div className="flex p-10 justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Add New Trending Product
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
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
              className="mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700"
            >
              Product
            </label>
            <ComboBox
              data={products}
              placeholder="Select product"
              onChange={handleProductChange}
              initialValue={formData.product}
              width="100%"
              className="mt-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Trending Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTrending;
