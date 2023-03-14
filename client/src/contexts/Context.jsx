import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Context.Provider value={{ searchKeyword, setSearchKeyword }}>
      {children}
    </Context.Provider>
  );
};
