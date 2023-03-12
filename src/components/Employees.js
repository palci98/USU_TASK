import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import AddEmployee from "./AddEmployee";
function Employees() {
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState();

  useEffect(() => {
    setRefresh(false);
    const fetchParams = { method: "GET" };
    fetch("http://3.83.232.191/api/employees", fetchParams)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  }, [refresh]);

  const deleteEmployee = (row) => {
    const fetchParams = { method: "DELETE" };
    fetch(`http://3.83.232.191/api/employees/${row.id}`, fetchParams).then(
      setRefresh([true])
    );
  };

  const columns = [
    { field: "id", headerName: "ID", maxWidth: 90 },
    {
      field: "name",
      headerName: "Name",
      maxWidth: 150,
      editable: true,
    },
    {
      field: "position",
      headerName: "Position",
      width: 200,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      maxWidth: 110,
      editable: true,
    },

    {
      field: "",
      headerName: "",
      maxWidth: 110,
      editable: true,
      renderCell: ({ row }) => (
        <Button onClick={() => deleteEmployee(row)}>Delete</Button>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddEmployee setRefresh={setRefresh} />

      <div
        style={{
          backgroundColor: "white",
          width: "600px",
          height: "631px",
          margin: "15px",
        }}
      >
        {employees && (
          <DataGrid
            rows={employees}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
          />
        )}
      </div>
    </div>
  );
}

export default Employees;
