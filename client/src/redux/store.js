import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import usersSaga from "./usersSaga";
import usersReducer from "./usersSlice";
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [saga],
});

saga.run(usersSaga);
