import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from "@/components/ui/button";
import { Search, Trash2 } from "lucide-react";

function StudentListTable({ studentList }) {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [20, 50, 100];
  const CustomButtons = (props) => {
    return (
      <Button variant="destructive">
        <Trash2 />
      </Button>
    );
  };
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: false },
    { field: "action", cellRenderer: CustomButtons },
  ]);
  const [rowData, setRowData] = useState();
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);

  return (
    <div className="my-">
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <div className="p-2 rounded-lg border shadow-sm flex gap-2 my-4 max-full">
          <Search />
          <input
            className="outline-none w-full"
            type="text"
            placeholder="Seach here"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          quickFilterText={searchInput}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}

export default StudentListTable;
