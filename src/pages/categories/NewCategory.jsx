import ImageUploader from "@/components/customUi/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    slug: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API
    console.log("New Category:", {
      name: formData.name,
      description: formData.description,
      slug: formData.slug,
      image: formData.image,
    });
    // Navigate to the categories page after submission
    navigate("/categories");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex p-10 justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Add New Category
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Container for Category Name and Slug */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Category Name
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
                htmlFor="slug"
                className="block text-sm font-medium text-gray-700"
              >
                Slug
              </label>
              <Input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
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
          {/* <ImageUploader onUpload={handleUpload} /> */}

          {/* <ImageUploader onUpload={handleUpload} /> */}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className=" px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Category
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
