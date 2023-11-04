import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import './style.css';
import { AppState, AppStates } from '../../store/StateStore/types';
import { RootState } from '../../store';
import { Typography } from '@mui/material';

const WordAdams: React.FC = () => {
  // Use useSelector to access the relevant state from the Redux store
  const appState = useSelector((state: RootState) => state.stateStore.appState); // Access the appState property
  const darkMode = useSelector((state: any) => {
    const res = state.stateStore.paletteMode;
    console.log(res);
    return res;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechBubbleText, setSpeechBubbleText] = useState("");
  useEffect(() => {
    switch (appState) {
      case AppStates.REQUEST_PENDING:
        setIsLoading(true)
        speak("Looking for word.")
        break;
      case AppStates.REQUEST_FAILURE:
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
        break;

      case AppStates.REQUEST_SUCCESS:
        setTimeout(() => {
          setIsLoading(false)
          speak("There you go")
        }, 1000);
        break;

      default:
        break;
    }

  }, [appState]);


  const speak = (text: string) => {
    setSpeechBubbleText(text)
    if (!isSpeaking) {
      setIsSpeaking(true);
      setTimeout(() => {
        setIsSpeaking(false);
      }, 6000);
    }
  }
  return (
    <>
      <div className={`wa-scene ${darkMode === 'dark' ? 'dark' : ''}`}>
        <div className={`wa-wrapper breath ${isSpeaking ? "speaking" : ''} ${isLoading ? 'eye-balling blink ' : ""}`}>
          <div className="wa-head">
            <div className="wa-eyes">
              <div className="wa-eye">
                <div className="eye-ball"></div>
              </div>
              <div className="wa-eye">
                <div className="eye-ball"></div>
              </div>
            </div>
            <div className="mouth">
              <img src="smirk.png" alt="" />
            </div>
          </div>
          <div className="wa-body"></div>
        </div>
        <div className={`desk`}>
          <div className="books-wrapper">
            <div className="books">
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
            </div>
            <div className="books">
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
            </div>
          </div>
        </div>
        <div className="speech-bubble">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <span>
            {speechBubbleText}
          </span>
        </div>
      </div >
    </>
  );
};

export default WordAdams;
