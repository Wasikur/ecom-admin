import React from "react";
import { Button } from "@/components/ui/button";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";

const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: "checkbox",
  responsive: "standard", // Ensure responsiveness
  selectableRows: "multiple", // Enable row selection with checkboxes
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15],
  elevation: 0, // Remove shadow
};

const Products = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold mb-4 md:mb-0">Products</h1>
        <Link to="/products/new-product">
          <Button className="bg-indigo-500 text-white hover:bg-indigo-600">
            Add New Product
          </Button>
        </Link>
      </div>
      <div className="mt-6 overflow-x-auto shadow-xl">
        <MUIDataTable
          title={"Product List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default Products;
