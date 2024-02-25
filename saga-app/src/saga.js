import { takeEvery, call, put } from "redux-saga/effects";

function* mySaga() {
  const users = yield takeEvery("GET_USER_FETCH", workGetUserFetch);
}

function* workGetUserFetch() {
  const users = yield call(userFetch);
  console.log(users);
  yield put({ type: "GET_USER_SUCCESS", users });
}

function userFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}
export default mySaga;
