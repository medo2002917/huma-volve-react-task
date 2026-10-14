import { createContext, type ReactNode } from "react";

export const AppContext = createContext("React Training");

export default function AppProvider({ children }: { children: ReactNode }) {
  return <AppContext.Provider value="React Training">{children}</AppContext.Provider>;
}
