import { describe } from 'riteway';
import questionReducer, {
  clearQuestions,
  createQuestion,
  updateQuestion,
  getQuestions,
  getScore,
} from './questionSlice';
const slice = 'question'
const withSlice = (state) => ({ [slice]: state });

describe('clearQuestions action', async (assert) => {
  const question = { question: 'is this thing on?', askee: 'sound tech' }
  const action = createQuestion(question);
  const state = withSlice(questionReducer([], action));
  {
    assert({
      given: 'an initial list of questions',
      should: 'return an empty list of questions',
      actual: withSlice(questionReducer(state, clearQuestions()))[slice],
      expected: [],
    });
  }
});

describe('createQuestion action', async (assert) => {
  {
    assert({
      given: 'an empty question',
      should: 'return a payload with { status: "Unanswered" }',
      actual: createQuestion().payload.status,
      expected: 'Unanswered',
    });
  }
  {  
    assert({
      given: 'no status',
      should: 'return a payload with { status: "Unanswered" }',
      actual: createQuestion({ question: 'question', askee: 'askee' }).payload
        .status,
      expected: 'Unanswered',
    });
  }
});

describe('questionReducer', async (assert) => {
  {
    const action = createQuestion({ question: 'question', askee: 'askee' });
    const state = withSlice(questionReducer([], action));
    assert({
      given: 'a createQuestion action',
      should: 'add the question to state',
      actual: state[slice].length,
      expected: 1,
    });
  }
  {
    const state = [{
      id: 1,
      question: 'Can I have a raise?',
      askee: 'My boss',
      status: 'Unanswered',
    }]
    const action = updateQuestion({
      id: 1,
      question: 'Can I have a raise?',
      askee: 'My boss',
      status: 'Rejected',
    })
    assert({
      given: 'an updateQuestion action',
      should: 'update the question in state',
      actual: questionReducer(state, action),
      expected: [
        {
          id: 1,
          question: 'Can I have a raise?',
          askee: 'My boss',
          status: 'Rejected',
        },
      ],
    });
  }
});

describe('getQuestions selector', async (assert) => {
  {
    const state = { questions: [] }
    assert({
      given: 'an empty state',
      should: 'should return no questions',
      actual: (getQuestions(state)).length,
      expected: 0,
    });
  }
  {
    const state = {
      questions: [
        {
          id: 1,
          question: 'Can I have a raise?',
          askee: 'My boss',
          status: 'Unanswered',
        },
      ]
    }
    assert({
      given: 'a state containing questions',
      should: 'should return those questions',
      actual: (getQuestions(state)).length,
      expected: 1,
    });
  }
});

describe('getScore selector', async (assert) => {
  {
    assert({
      given: 'a question status of "Unanswered"',
      should: 'should be scored 0',
      actual: getScore([
        {
          id: 1,
          question: 'Can I have a raise?',
          askee: 'My boss',
          status: 'Unanswered',
        },
      ]),
      expected: 0,
    });
  }
  {
    assert({
      given: 'a question status of "Accepted"',
      should: 'should be scored 1',
      actual: getScore([
        {
          id: 1,
          question: 'Can I have a raise?',
          askee: 'My boss',
          status: 'Accepted',
        },
      ]),
      expected: 1,
    });
  }
  {
    assert({
      given: 'a question status of "Rejected"',
      should: 'should be scored 10',
      actual: getScore([
        {
          id: 1,
          question: 'Can I have a raise?',
          askee: 'My boss',
          status: 'Rejected',
        },
      ]),
      expected: 10,
    });
  }
});
