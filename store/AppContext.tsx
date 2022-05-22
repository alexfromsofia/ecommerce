import * as React from "react";

export interface IAppContext {
  checkoutDrawerOpen: boolean;
}

export interface AppContextInterface {
  state: IAppContext;
  setState: React.Dispatch<React.SetStateAction<IAppContext>>;
}

export const initialState: AppContextInterface = {
  state: { checkoutDrawerOpen: false },
  setState: () => {},
};

export const AppContext =
  React.createContext<AppContextInterface>(initialState);
