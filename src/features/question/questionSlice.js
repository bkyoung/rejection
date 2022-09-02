import { createAction, createSlice } from '@reduxjs/toolkit';
import cuid from 'cuid';

const slice = 'question';

// action creators
const clearQuestions = createAction(`${slice}/clearQuestions`);

const createQuestion = createAction(`${slice}/createQuestion`, ({ id = cuid(), question = '', askee = '', status = 'Unanswered' } = {}) => ({
  payload: { id, question, askee, status }
}));

const loadQuestions = createAction(`${slice}/loadQuestions`);

const updateQuestion = createAction(`${slice}/updateQuestion`, ({ id, question, askee, status }) => ({
  payload: { id, question, askee, status }
}));

// reducers
const initialState = [];
const question = createSlice({
  name: slice,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(clearQuestions, (state, action) => {
        state = initialState;
        return state;
      })
      .addCase(createQuestion, (state, action) => {
        state = state.concat([action.payload]);
        return state;
      })
      .addCase(loadQuestions, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(updateQuestion, (state, action) => {
        state = state.map(question => {
          if (question.id !== action.payload.id) return question;
          return action.payload;
        });
        return state;
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

export { clearQuestions, createQuestion, updateQuestion, getScore, getQuestions }
const questionReducer = question.reducer
export default questionReducer
