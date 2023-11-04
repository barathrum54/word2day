import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Stack, Grid } from '@mui/material';

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
          <img src="logo.png" alt="" style={{ height: "30px", width: "30px", objectFit: "contain" }} />
          <Typography variant="h5">Word2Day</Typography>
        </div>
        <Stack>
          {children}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
