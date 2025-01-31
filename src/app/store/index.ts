import { todoReducer } from "@entities/todo";
import { configureStore } from "@reduxjs/toolkit";

export const rootStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
