import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Word2Day</Typography>
        <Stack>
          {children}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
