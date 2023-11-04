import React, { useState, useMemo } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DescriptionWrapper from './components/DescriptionWrapper';
import WordPanel from './components/WordPanel';
import Footer from './components/Footer';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import CTAButton from './components/CTA';
import WordAdams from './components/WordAdams';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import LightSwitch from './components/LightSwitch';
import { togglePaletteMode } from './store/StateStore/reducers';
import WordWrapper from './components/WordWrapper';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store"; // Import the `persistor` you exported from your store configuration

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
};

const AppContent: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => { return state.stateStore.paletteMode });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(togglePaletteMode());
      },
    }),
    [dispatch]
  );

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: (theme) => ({
              '::-webkit-scrollbar': {
                width: '12px',
              },
              '::-webkit-scrollbar-thumb': {
                background: theme.palette.mode === 'dark' ? '#4CAF50' : '#0078d4',
                border: '2px solid #fff',
                borderColor: theme.palette.mode === 'dark' ? '#4CAF50' : '#0078d4',
                borderRadius: '10px',
              },
              '::-webkit-scrollbar-track': {
                background: theme.palette.mode === 'dark' ? '#000' : '#fff',
              },
              scrollbarWidth: 'auto',
              scrollbarColor: theme.palette.mode === 'dark' ? '#4CAF50 #0078d4' : '#0078d4 #4CAF50',
            }),
          },
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar>
          <LightSwitch colorMode={colorMode} theme={theme} />
        </Navbar>
        <div className="content">
          <div style={{ textAlign: 'center' }}>
            <WordPanel>
              <WordWrapper />
              <DescriptionWrapper />
            </WordPanel>
            <CTAButton />
          </div>
          <WordAdams />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
