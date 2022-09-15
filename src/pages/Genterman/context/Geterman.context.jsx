import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



export const GentermanContext = createContext();

export const GentermanProvider = ({ children }) => {
  const [gentermanContextValue, setGentermanContextValue] = useState('');
  return (
    <GentermanContext.Provider value={{ gentermanContextValue, setGentermanContextValue }}>
      { children }
    </GentermanContext.Provider>
  )
}

export const useGentermanContext = () => {
  const context = useContext(GentermanContext);

  if (context === undefined) {
    throw new Error('GentermanContext must ge used within a GentermanProvider');
  }
  return context;
}