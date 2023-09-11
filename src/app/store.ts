import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Define the RootState type to represent your entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Define the AppThunk type for thunks
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
