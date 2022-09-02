import { all, call, put, select, takeEvery } from 'redux-saga/effects'
import {
  getQuestions,
  getUser,
} from '../features/user/userSlice.js';
import {
  addUserQuestions,
  getUserQuestions,
} from '../services/firebase.js';

const isLoggedIn = (user) => user !== 'Anonymous'

function* addUserQuestionsSaga() {
  const { displayName, uid } = yield select(getUser)
  if (isLoggedIn(displayName)) {
    const state = yield select()
    const questionsToAdd = state.questions
    yield call(addUserQuestions, uid, questionsToAdd);
  }
}

function* getUserQuestionsSaga() {
  const { displayName, uid } = yield select(getUser)
  if (isLoggedIn(displayName)) {
    const questions = yield call(getUserQuestions, uid)
    yield put({ type: 'question/loadQuestions', payload: [...questions] });
  }
}

function* userLoginSaga() {
  const { uid } = yield select(getUser)
  const questions = yield call(getUserQuestions, uid)
  yield put({ type: 'question/loadQuestions', payload: [...questions]})
}

function* watchCreateQuestion() {
  yield takeEvery('question/createQuestion', addUserQuestionsSaga)
}

function* watchUpdateQuestion() {
  yield takeEvery('question/updateQuestion', addUserQuestionsSaga)
}

function* watchLogin() {
  yield takeEvery('user/setUser', userLoginSaga)
}

export default function* rejectionSaga() {
  yield all([
    watchCreateQuestion(),
    watchLogin(),
    watchUpdateQuestion(),
  ])
}