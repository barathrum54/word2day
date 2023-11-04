import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store'; // Import RootState
import { AppStates } from '../../store/StateStore/types';
import { requestWord } from '../../store/WordStore/actions';

const CTAButton: React.FC = () => {
  const dispatch = useDispatch();

  const appState = useSelector((state: RootState) => state.stateStore.appState); // Access the appState property

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    switch (appState) {
      case AppStates.REQUEST_PENDING:
        setIsLoading(true)
        setIsDisabled(true)
        break;
      case AppStates.REQUEST_FAILURE:
        setIsLoading(false)
        setIsDisabled(false)
        break;

      case AppStates.REQUEST_SUCCESS:
        setIsLoading(false)
        setIsDisabled(false)
        break;

      default:
        break;
    }

  }, [appState]);

  const handleButtonClick = () => {
    dispatch(requestWord() as any)
  };

  return (
    <Button variant="contained" color="primary" size={'large'} disabled={isDisabled} onClick={handleButtonClick}>
      {isLoading ?
        <>
          <Typography variant='h6' fontWeight={'600'} marginRight={2}>
            Fetching
          </Typography>
          <CircularProgress />
        </>
        :
        <>
          <Typography variant='h6' fontWeight={'600'}>
            New Word
          </Typography>
        </>
      }
    </Button>
  );
};

export default CTAButton;
