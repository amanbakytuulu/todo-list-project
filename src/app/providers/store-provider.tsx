import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { rootStore } from "../store";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={rootStore}>{children}</Provider>;
};
