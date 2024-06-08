import React from "react";
import MUIDataTable from "mui-datatables";

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

const Orders = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold mb-4 md:mb-0">Orders</h1>
      </div>
      <div className="mt-6 overflow-x-auto shadow-xl">
        <MUIDataTable
          title={"Order List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default Orders;
