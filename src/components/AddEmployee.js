import React, { useState } from "react";
import { Button, TextField, Modal, Typography } from "@mui/material";
function AddEmployee({ setRefresh }) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const addEmployee = () => {
    fetch("http://3.83.232.191/api/employees/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        age: age,
        name: name,
        position: position,
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (res.status === 200) {
          setRefresh(true);
          setOpen(false);
        }
      });
    });
  };

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
      <Button
        style={{
          width: "300px",
          display: "flex",
          color: "white",
          borderColor: "white",
          marginTop: "20px",
        }}
        onClick={() => setOpen(true)}
        variant="outlined"
      >
        Add employee
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            maxWidth: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography style={{ margin: "16px 16px 8px" }}>
            Add employee
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              style={{ margin: "20px" }}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              placeholder="Name"
            />
            <TextField
              style={{ margin: "20px" }}
              onChange={(e) => {
                setAge(e.currentTarget.value);
              }}
              placeholder="Age"
            />
            <TextField
              style={{ margin: "20px" }}
              onChange={(e) => {
                setPosition(e.currentTarget.value);
              }}
              placeholder="Position"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              margin: " 16px",
            }}
          >
            <Button
              variant="outlined"
              style={{ borderRadius: "50px", marginRight: "16px" }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              style={{ borderRadius: "50px" }}
              onClick={() => addEmployee()}
            >
              Add employee
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddEmployee;
