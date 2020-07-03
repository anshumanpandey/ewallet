import { createStore } from 'react-hooks-global-state';

export const GLOBAL_STATE_ACTIONS = {
    ERROR: 'error',
    SUCCESS: 'success'
}

const initialState = {
    error: null,
    success: null,
    token: null,
    profile: null
};

const reducer = (state, action) => {
    switch (action.type) {
      case GLOBAL_STATE_ACTIONS.ERROR: return { ...state, ...{error: action.state} };
      case GLOBAL_STATE_ACTIONS.SUCCESS: return { ...state, ...{success: action.state} };
      default: return state;
    }
  };

export const { dispatch: dispatchGlobalState, useGlobalState, getGlobalState } = createStore(reducer, initialState);