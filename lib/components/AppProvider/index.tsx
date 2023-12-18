import { useState, ReactNode, createContext, useContext } from 'react';

type ContextType = {
  value: boolean;
  setValue: (value: boolean) => void;
  unmounted: boolean;
  setUnmounted: (val: boolean) => void;
};

const AppContext = createContext<ContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('must not null');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  return (
    <AppContext.Provider value={{ value, setValue, unmounted, setUnmounted }}>{children}</AppContext.Provider>
  );
};
