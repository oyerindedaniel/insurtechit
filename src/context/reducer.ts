import { localStorageName } from '@/config';
import { ContextReducer, ContextState } from './types';

const reducer: ContextReducer = (state, action) => {
  let newState: ContextState = { ...state };
  switch (action.type) {
    case 'TOGGLE_SIDEBAR': {
      newState = {
        ...state,
        UI: {
          ...state.UI,
          isSidebarOpen: !state.UI.isSidebarOpen
        }
      };
      break;
    }
    case 'SET_SIDEBAR': {
      newState = {
        ...state,
        UI: {
          ...state.UI,
          isSidebarOpen: action.payload
        }
      };
      break;
    }
    case 'SET_NAVBAR-COLOR': {
      newState = {
        ...state,
        UI: {
          ...state.UI,
          navbarColor: action.payload.color
        }
      };
      break;
    }
    default:
      throw new Error(`No such type`);
  }

  localStorage.setItem(
    localStorageName,
    JSON.stringify({
      ...newState
    })
  );
  return newState;
};

export default reducer;
