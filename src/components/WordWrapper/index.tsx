import React, { useEffect, useState } from 'react';
import { Divider, LinearProgress, Stack, Typography } from '@mui/material';
import './style.css';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { requestWord } from '../../store/WordStore/actions';

const WordWrapper: React.FC = () => {
  const { word } = useSelector((state: RootState) => state.wordStore); // Access the appState property
  const dispatch = useDispatch();
  const wordData = word?.word
  useEffect(() => {
    dispatch(requestWord() as any)
  }, []);

  return (
    <div className="WordWrapper">
      <Stack alignContent={'center'} textAlign={'center'} sx={{ paddingTop: "20px" }}>
        <Typography sx={{ paddingBlock: "10px" }} variant="h5">Word of the Day</Typography>
        <Divider />

        <Typography variant="h3" sx={{ textTransform: "capitalize", paddingTop: "10px" }}>{wordData || <>
          <LinearProgress sx={{ width: "100%", height: "10px", marginBlock: "20px" }} />
        </>}</Typography>
      </Stack>
    </div>
  );
};

export default WordWrapper;
