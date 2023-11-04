import { AnyAction, Dispatch } from "redux";
import { WordActions, WordAction } from "./types";
import { setWord } from "./reducers";
import { setAppState } from "../StateStore/reducers";
import { fetchWord } from "./api"; // Import your fetchWord function
import { AppStates } from "../StateStore/types";

export const requestWord = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(setAppState(AppStates.REQUEST_PENDING));
  setTimeout(async () => {
    const data = await fetchWord();
    console.log(data);
    if (data) {
      dispatch(setWord(data[0]));
      dispatch(setAppState(AppStates.REQUEST_SUCCESS));
    } else {
      console.log("set appstate");
      dispatch(setAppState(AppStates.REQUEST_FAILURE));
    }
  }, 1000);
};
