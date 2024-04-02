/* eslint-disable import/no-cycle */

export interface ContextState {
  UI: {
    isSidebarOpen: boolean;
    navbarColor: string;
    activeOfferingIdx: number;
  };
}

export type ContextAction =
  | {
      type: 'TOGGLE_SIDEBAR';
      payload: boolean;
    }
  | {
      type: 'SET_SIDEBAR';
      payload: boolean;
    }
  | {
      type: 'SET_NAVBAR-COLOR';
      payload: { color: string };
    }
  | {
      type: 'SET_ACTIVE-OFFERING-INDEX';
      payload: number;
    };

export type ContextDispatch = (action: ContextAction) => void;

export type ContextReducer = (state: ContextState, action: ContextAction) => ContextState;
