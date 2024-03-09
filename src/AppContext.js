import React, { createContext, useReducer } from 'react';
import api from './common/api';
import { REFRESH_TOKEN, TOKEN, USER } from './common/constants';

const getLoggedInUser = () => {
  // eslint-disable-next-line no-undef
  let loggedInUser = localStorage?.getItem(USER);
  loggedInUser = loggedInUser ? JSON?.parse(loggedInUser) : null;

  return loggedInUser;
};

const initialState = {
  currentUser: getLoggedInUser() || {},
  // eslint-disable-next-line no-undef
  authToken: localStorage?.getItem(TOKEN),
  showPrompt: false,
  isOpen: false,
};

const reducer = (state, action) => {
  switch (action?.type) {
    case 'SET_CURRENT_USER':
      // eslint-disable-next-line no-case-declarations
      const user = action?.data || {};

      // eslint-disable-next-line no-undef
      localStorage.setItem(
        USER,
        user && Object?.keys(user)?.length ? JSON?.stringify(user) : null,
      );
      return { ...state, currentUser: { ...user } };
    case 'SET_CURRENT_ROLE':
      return { ...state, currentRole: action?.data };
    case 'SET_SHOW_PROMPT':
      return { ...state, showPrompt: action?.data };
    case 'LOGOUT':
      delete api?.defaults?.headers?.common?.Authorization;
      // eslint-disable-next-line no-undef
      localStorage?.clear();
      return {
        ...initialState,
        authenticated: false,
        authToken: null,
        user: {},
      };
    case 'SET_FETCHING_USER_DETAILS':
      return { ...state, fetchingUserDetails: action?.data };
    case 'SET_AUTHENTICATED':
      return { ...state, authenticated: action?.data };
    case 'SET_TOKEN':
      // eslint-disable-next-line no-undef
      localStorage.setItem(TOKEN, action?.data);
      return { ...state, authToken: action?.data };
    case 'SET_REFRESH_TOKEN':
      // eslint-disable-next-line no-undef
      localStorage.setItem(REFRESH_TOKEN, action?.data);
      return {
        ...state,
        refreshToken: action?.data,
      };
    case 'SET_INITIAL_SHOW_ALL_FIELDS_STATUS':
      return { ...state, initialShowAllFieldStatus: action?.data };
    case 'TOGGLE_SIDEBAR':
      return { ...state, isOpen: !state?.isOpen };
    default:
      return { ...state };
  }
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getToken = () =>
    // eslint-disable-next-line no-undef
    localStorage?.getItem(TOKEN) || null;
  const getRefreshToken = () =>
    // eslint-disable-next-line no-undef
    localStorage?.getItem(REFRESH_TOKEN);
  const getCurrentUser = () =>
    // eslint-disable-next-line no-undef
    localStorage?.getItem(USER)
      ? // eslint-disable-next-line no-undef
        JSON?.parse(localStorage?.getItem(USER))
      : {};
  const getCurrentUserRole = () => {
    const loggedInUser = getLoggedInUser();
    return loggedInUser?.roles?.[0] || '';
  };

  const isAuthenticated = () => state?.authenticated;

  const initializeAuth = (authToken, userData, refreshToken) => {
    const token = authToken || getToken();
    const user = userData || getCurrentUser();
    const refresh = refreshToken || getRefreshToken();
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({ type: 'SET_TOKEN', data: token });
      dispatch({ type: 'SET_REFRESH_TOKEN', data: refresh });
      dispatch({ type: 'SET_AUTHENTICATED', data: true });
      dispatch({ type: 'SET_CURRENT_USER', data: user });
      if (user?.roles?.[0]) {
        dispatch({ type: 'SET_CURRENT_ROLE', data: user?.roles?.[0] });
      }
    }
  };

  const value = {
    state,
    dispatch,
    isAuthenticated,
    getToken,
    getRefreshToken,
    initializeAuth,
    getCurrentUserRole,
    getCurrentUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const AppContextConsumer = AppContext?.Consumer;

export { AppContext, AppContextConsumer, AppContextProvider };
