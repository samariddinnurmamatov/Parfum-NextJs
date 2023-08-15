// import { Provider } from "react-redux";
// import { store } from "../store";
// import React from "react";

// interface ProviderTypes {
//   children: React.ReactNode;
// }

// export const ReduxProvider = ({ children }: ProviderTypes) => {
//   return <Provider store={store}>{children}</Provider>;
// };

import { Provider } from "react-redux";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { ProviderTypes } from "@/types";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const ReduxProvider: React.FC<ProviderTypes> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
