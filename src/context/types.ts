/* eslint-disable import/no-cycle */

export interface ContextState {
  UI: {
    isSidebarOpen: boolean;
    navbarColor: string;
  };
}

export type ContextAction =
  | {
      type: "TOGGLE_SIDEBAR";
      payload: boolean;
    }
  | {
      type: "SET_SIDEBAR";
      payload: boolean;
    }
  | {
      type: "SET_NAVBAR-COLOR";
      payload: { color: string };
    };

export type ContextDispatch = (action: ContextAction) => void;

export type ContextReducer = (
  state: ContextState,
  action: ContextAction
) => ContextState;
