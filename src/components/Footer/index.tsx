import React from 'react';
import { Typography, Container } from '@mui/material';
import './style.css';

const Footer: React.FC = () => {
  return (
    <div className='Footer'>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Word2Day. All rights are fine.
      </Typography>
    </div>
  );
};

export default Footer;
