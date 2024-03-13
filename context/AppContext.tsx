"use client";

import { ToursPayload } from "@/types";
import React, { createContext, useContext } from "react";

type AppContext = {
  tours: ToursPayload;
  setTours: any;
  loading: boolean;
  setLoading: any;
};
export const AppContext = createContext<AppContext>({
  tours: null,
  setTours: () => {},
  loading: false,
  setLoading: () => {},
});

type AppProvider = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProvider) => {
  const [tours, setTours] = React.useState<ToursPayload>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <AppContext.Provider value={{ tours, setTours, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useProviderContext must be used within a ContextProvider");
  }
  return context;
};
