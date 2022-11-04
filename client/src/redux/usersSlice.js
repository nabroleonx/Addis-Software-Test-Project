import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    searchedUsers: [],
    isLoading: false,
  },
  reducers: {
    createUser: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, action) => {
      state.users.push(action.payload);
      state.searchedUsers.push(action.payload);
      state.isLoading = false;
    },
    createUserFailure: (state) => {
      state.isLoading = false;
    },
    deleteUser: (state) => {
      state.isLoading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(
        (user) => user._id !== action.payload.id
      );
      state.searchedUsers = state.searchedUsers.filter(
        (user) => user._id !== action.payload.id
      );
      state.isLoading = false;
    },
    deleteUserFailure: (state) => {
      state.isLoading = false;
    },
    editUser: (state) => {
      state.isLoading = true;
    },
    editUserSuccess: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
      state.searchedUsers = state.searchedUsers.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
      state.isLoading = false;
    },
    editUserFailure: (state) => {
      state.isLoading = false;
    },
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.searchedUsers = action.payload;
      state.isLoading = false;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
    },
    searchUser: (state, action) => {
      state.searchedUsers =
        action.payload === ""
          ? state.users
          : state.users.filter((user) =>
              user.firstname
                .toLowerCase()
                .includes(action.payload.toLowerCase())
            );
    },
  },
});

export const {
  createUser,
  createUserSuccess,
  createUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
  editUser,
  editUserSuccess,
  editUserFailure,
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  searchUser,
} = usersSlice.actions;

export default usersSlice.reducer;
