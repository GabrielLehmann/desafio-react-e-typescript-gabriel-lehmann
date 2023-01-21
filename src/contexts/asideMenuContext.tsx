import React, { createContext, ReactNode, useContext, useState } from "react";

interface AsideMenuContextProviderProps {
  isAsideMenuOpen: boolean;
  setAsideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const asideMenuContext = createContext(
  {} as AsideMenuContextProviderProps
);

export function useAside() {
  return useContext(asideMenuContext);
}

export function AsideMenuContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAsideMenuOpen, setAsideMenuOpen] = useState(false);
  return (
    <asideMenuContext.Provider value={{ isAsideMenuOpen, setAsideMenuOpen }}>
      {children}
    </asideMenuContext.Provider>
  );
}
