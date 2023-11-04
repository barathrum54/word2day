// appStateTypes.ts

export interface AppState {
  appState: AppStates;
  paletteMode: string;
}

export interface AppStateAction {
  type: AppStates;
  payload: string;
}

export enum AppStates {
  INITIALIZE_PENDING = "INITIALIZE_PENDING",
  REQUEST_PENDING = "REQUEST_PENDING",
  REQUEST_SUCCESS = "REQUEST_SUCCESS",
  REQUEST_FAILURE = "REQUEST_FAILURE",
}
