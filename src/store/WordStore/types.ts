export interface WordState {
  word: any;
}

export interface WordAction {
  type: WordActions;
}

export enum WordActions {
  SET_WORD = "SET_WORD",
  REQUEST_WORD = "REQUEST_WORD",
}
