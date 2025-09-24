import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0.5);
  const [visible, setVisible] = useState('doyouknow');

  return (
    <ProgressContext.Provider value={{ progress, setProgress, visible, setVisible }}>
      {children}
    </ProgressContext.Provider>
  );
};
