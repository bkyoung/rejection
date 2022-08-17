import { createAction, createSelector, createSlice } from '@reduxjs/toolkit';
import cuid from 'cuid';

// action creators
const createQuestion = createAction('rejection/createQuestion', ({ id = cuid(), question = '', askee = '', status = 'Unanswered' } = {}) => ({
  payload: { id, question, askee, status }
}));

const updateQuestion = createAction('rejection/updateQuestion', ({ id, question, askee, status }) => ({
  payload: { id, question, askee, status }
}));

// reducers
const initialState = [];
const rejection = createSlice({
  name: 'rejection',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion, (state, action) => state.concat([action.payload]))
      .addCase(updateQuestion, (state, action) => {
        const newState = state.map(question => {
          if (question.id !== action.payload.id) return question;
          return action.payload;
        })
        return newState
      })
      .addDefaultCase((state, action) => state)
  },
});

// selectors
const getQuestions = (state) => state.questions;
const getScore = (state) => {
  const qArr = state.questions ? state.questions : state
  if (!qArr || qArr.length === 0) {
    return 0
  } else {
    return qArr.reduce(
      (score, question) =>
        score +
        (question.status === 'Accepted'
          ? 1
          : question.status === 'Rejected'
          ? 10
          : 0),
      0
    );
  }
};

export { createQuestion, updateQuestion, getScore, getQuestions }
const rejectionReducer = rejection.reducer
export default rejectionReducer
