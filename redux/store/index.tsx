// import { configureStore } from "@reduxjs/toolkit";
// import authReducer, { name as authName } from "../slices/authSlice";

// export const store = configureStore({
//   reducer: {
//     [authName]: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>; // RootState export qilindi
// export type AppDispatch = typeof store.dispatch; // AppDispatch export qilindi


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; // Slice import qilindi

export const store = configureStore({
  reducer: {
    auth: authReducer, // Reducer nomi o'zgardi
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../slices/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;