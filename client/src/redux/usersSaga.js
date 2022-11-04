import { call, put, takeEvery } from "redux-saga/effects";
import {
  createUserSuccess,
  deleteUserSuccess,
  editUserSuccess,
  getUsersSuccess,
} from "./usersSlice";
import axios from "axios";
import { toast } from "react-toastify";

function* getUsersData() {
  const users = yield call(() =>
    axios.get("http://localhost:5000/api/users").then((res) => {
      return res.data;
    })
  );
  yield put(getUsersSuccess(users));
}

const AddUserAPI = async (data) => {
  let response = await axios.post(
    "http://localhost:5000/api/users/",
    {
      firstname: data.firstname,
      lastname: data.lastname,
      age: data.age,
      gender: data.gender,
      height: data.height,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};

function* addUser({ payload }) {
  const { firstname, lastname, age, gender, height } = yield payload;
  const user = yield call(AddUserAPI, {
    firstname,
    lastname,
    age,
    gender,
    height,
  });
  yield put(createUserSuccess(user.data));
  toast.success("User created successfully!");
}

function* updateUser({ payload }) {
  const { id, data } = yield payload;
  const user = yield call(() =>
    axios.patch(`http://localhost:5000/api/users/${id}`, data).then((res) => {
      return res.data;
    })
  );
  yield put(editUserSuccess(user));
  toast.success("User updated successfully!");
}

function* removeUser({ payload }) {
  const { id } = yield payload;
  const userId = yield call(() =>
    axios.delete(`http://localhost:5000/api/users/${id}`).then((res) => {
      return res.data;
    })
  );
  yield put(deleteUserSuccess(userId));
  toast.success("User deleted successfully!");
}

function* usersSaga() {
  yield takeEvery("users/getUsers", getUsersData);
  yield takeEvery("users/createUser", addUser);
  yield takeEvery("users/deleteUser", removeUser);
  yield takeEvery("users/editUser", updateUser);
}

export default usersSaga;
