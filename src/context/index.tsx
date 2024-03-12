"use client";

import { localStorageName } from "@/config";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { ContextAction, ContextDispatch, ContextState } from "./types";

import Reducer from "./reducer";

let localStorageState;

if (typeof window !== "undefined") {
  localStorageState = localStorage.getItem(localStorageName);
}

export const initialState: ContextState = localStorageState
  ? {
      ...JSON.parse(localStorageState),
      UI: {
        isSidebarOpen: false,
      },
    }
  : {
      UI: {
        isSidebarOpen: false,
        cartTotal: 0,
      },
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };

export const globalStoreContext = createContext<{
  state: ContextState;
  dispatch: Dispatch<ContextAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <globalStoreContext.Provider value={value}>
      {children}
    </globalStoreContext.Provider>
  );
};

export const useGlobalStoreContext: () => {
  state: ContextState;
  dispatch: ContextDispatch;
} = () => {
  const globalContext = useContext(globalStoreContext);

  if (!globalContext) {
    throw new Error("");
  }

  const { state, dispatch } = globalContext;

  return { state, dispatch };
};
