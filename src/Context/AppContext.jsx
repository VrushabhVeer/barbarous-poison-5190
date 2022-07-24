import React, { createContext, useState } from "react";
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  const handelLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };

  const handelLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };

  return (
    <AppContext.Provider value={{ state, handelLogin, handelLogout }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
