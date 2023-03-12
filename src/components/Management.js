import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

function Management() {
  const [dataByPosition, setDataByPosition] = useState();
  const [dataAge, setDataAge] = useState();

  useEffect(() => {
    const fetchParams = { method: "GET" };
    fetch(
      "http://3.83.232.191/api/employees/statistics_by_position",
      fetchParams
    )
      .then((res) => res.json())
      .then((data) => {
        setDataByPosition(data);
      });
  }, []);

  useEffect(() => {
    const fetchParams = { method: "GET" };
    fetch("http://3.83.232.191/api/employees/statistics_by_age", fetchParams)
      .then((res) => res.json())
      .then((data) => {
        setDataAge(data);
      });
  }, []);

  const columns = [
    { field: "age", headerName: "Age", width: 190 },
    {
      field: "count",
      headerName: "Count",
      width: 100,
      editable: true,
    },
    {
      field: "position",
      headerName: "Position",
      width: 210,
      editable: true,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            height: "400px",
            minWidth: "600px",
            overflow: "auto",
            backgroundColor: "white",
            margin: "15px",
          }}
        >
          {dataByPosition && (
            <DataGrid
              getRowId={(row) => row.position}
              rows={dataByPosition}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          )}
        </div>
        <PieChart pieData={dataByPosition} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BarChart
          text={"Employees by age range"}
          label={"Count of people in age range"}
          labels={dataAge?.map((data) => {
            return data.ageRange;
          })}
          data={dataAge?.map((data) => data.count)}
        />
        <BarChart
          text={"Employees by age range"}
          label={"Count of people in age range"}
          labels={dataByPosition?.map((data) => {
            return data.position;
          })}
          data={dataByPosition?.map((data) => {
            return data.age;
          })}
        />
      </div>
    </div>
  );
}

export default Management;
