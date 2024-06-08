import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "../ui/button";

const ImageUploader = ({ onUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDrop = (droppedFiles) => {
    const newFiles = [...files, ...droppedFiles];
    setFiles(newFiles);
  };

  const handleRemove = (fileIndex) => {
    const newFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(newFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleUpload = () => {
    onUpload(files);
    setIsOpen(false);
    setFiles([]);
  };

  return (
    <>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 hover:bg-green-700"
          >
            Upload Images
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div
            {...getRootProps()}
            className="dropzone p-4 border border-dashed border-gray-400 rounded-lg text-center"
          >
            <input {...getInputProps()} />
            <p>Drag & drop images here, or click to select</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.95-11.35a1 1 0 10-1.4-1.43L10 8.59l-3.55-3.55a1 1 0 10-1.41 1.42L8.59 10l-3.55 3.55a1 1 0 101.42 1.42L10 11.41l3.55 3.55a1 1 0 001.41-1.42L11.41 10l3.55-3.55z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <Button
            onClick={handleUpload}
            className="mt-4 bg-green-600 hover:bg-green-700"
          >
            Upload
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

ImageUploader.propTypes = {
  onUpload: PropTypes.func.isRequired, // Function to handle the uploaded files
};

export default ImageUploader;
