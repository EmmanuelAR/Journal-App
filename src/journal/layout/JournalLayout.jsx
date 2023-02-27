import { Box } from "@mui/system";
import React from "react";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}

      {/* SideBar */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* toolBar */}
        {children}
      </Box>
    </Box>
  );
};
