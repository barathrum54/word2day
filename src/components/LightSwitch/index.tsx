
import React from 'react';
import { IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import './style.css'

const LightSwitch: React.FC<{ colorMode: { toggleColorMode: () => void }, theme: { palette: { mode: string } } }> = ({ colorMode, theme }) => {

  return (
    <div className='LightSwitchWrapper'>
      <IconButton sx={{
        ml: 1,
        boxShadow: 'none',
      }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default LightSwitch;
