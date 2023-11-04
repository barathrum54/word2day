import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import './style.css';
import { WordPanelProps } from '../../constants/types';

const WordPanel: React.FC<WordPanelProps> = ({ children }) => {
  return <Container style={{ padding: '30px' }} className="WordPanel">
    <Stack spacing={2} width={'100%'}>
      {children}
    </Stack>
  </Container>;
};

export default WordPanel;
