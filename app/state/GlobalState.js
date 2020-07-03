import { createStore } from 'react-hooks-global-state';

export const GLOBAL_STATE_ACTIONS = {
    ERROR: 'error'
}

const initialState = {
    error: null,
    token: null,
    profile: null
};

const reducer = (state, action) => {
    switch (action.type) {
      case GLOBAL_STATE_ACTIONS.ERROR: return { ...state, ...{error: action.state} };
      default: return state;
    }
  };

export const { dispatch: dispatchGlobalState, useGlobalState, getGlobalState } = createStore(reducer, initialState);