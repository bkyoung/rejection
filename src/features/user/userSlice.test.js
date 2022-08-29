import { describe } from 'riteway';
import userReducer, {
  getUser,
  isLoggedIn,
  setUser,
  unsetUser,
  slice,
} from './userSlice';

const withSlice = (state) => ({ [slice]: state });

describe('setUser action', async (assert) => {
  {
    const user = { uid: '1', email: 'test@test.com', displayName: 'test' };
    const action = setUser(user);
    const state = withSlice(userReducer({}, action));

    assert({
      given: 'a user signs in',
      should: "show the signed-in user",
      actual: getUser(state),
      expected: user, // user object here
    });
  }
});
describe('unsetUser action', async (assert) => {
  {
    const user = { uid: '1', email: 'test@test.com', displayName: 'test' };
    const action = unsetUser(user);
    const state = withSlice(userReducer({}, action));
    assert({
      given: 'a user signs out',
      should: 'not show that user info anymore',
      actual: getUser(state).displayName,
      expected: 'Anonymous',
    });
  }
});
describe('getUser selector', async (assert) => {
  {
    const action = unsetUser()
    const state = withSlice(userReducer({}, action));
    assert({
      given: 'no user is signed in',
      should: 'should return the Anonymous user',
      actual: (getUser(state)).displayName,
      expected: 'Anonymous',
    });
  }
  {
    const user = { uid: 1, displayName: 'Test User', email: 'test@user.com', photoURL: '' };
    const action = setUser(user);
    const state = withSlice(userReducer({}, action));
    assert({
      given: 'a signed in user',
      should: 'should return the user',
      actual: (getUser(state)).displayName,
      expected: 'Test User',
    });
  }
});
describe('isLoggedIn selector', async (assert) => {
  {
    const user = { uid: '1', email: 'test@test.com', displayName: 'test' };
    const action = unsetUser(user);
    const state = withSlice(userReducer({}, action));
    assert({
      given: 'no user signed in',
      should: 'should return user is not logged in',
      actual: isLoggedIn(state),
      expected: false,
    });
  }
  {
    const user = { uid: '1', email: 'test@test.com', displayName: 'test' };
    const action = setUser(user);
    const state = withSlice(userReducer({}, action));
    assert({
      given: 'a signed in user',
      should: 'should return the user is logged in',
      actual: isLoggedIn(state),
      expected: true,
    });
  }
});