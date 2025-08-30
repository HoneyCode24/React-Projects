import React, { createContext, useState } from "react";

export const FilterContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [gender, setGender] = useState("All");
  const [category, setCategory] = useState("All");

  return (
    <FilterContext.Provider value={{ gender, setGender, category, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export default ContextProvider;
