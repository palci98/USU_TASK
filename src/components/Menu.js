import React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const drawerWidth = 120;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Employees", "Management"].map((text) => (
          <>
            <ListItem
              onClick={() => navigate(`/${text}`)}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
    >
      {drawer}
    </Drawer>
  );
}

export default Menu;
