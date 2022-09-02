import { createAction, createSlice } from '@reduxjs/toolkit';

const slice = 'user';

// action creators
const setUser = createAction(`${ slice }/setUser`);
const unsetUser = createAction(`${ slice }/unsetUser`);

// reducers
const initialState = {
    uid: "000000000000",
    displayName: "Anonymous",
    email: "anonymous@example.com",
    photoURL: '',
};

const user = createSlice({
  name: slice,
  initialState,
  reducers: {
    setUser: (state, action) => {
        state[slice] = action.payload;
      return state
    },
    unsetUser: (state) => {
      state[slice] = initialState;
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state, action) => state)
  },
});

// selectors
const getUser = (state) => state[slice].user || initialState;
const isLoggedIn = (state) => {
  const user = state[slice]?.user || initialState;
  return user.displayName !== 'Anonymous';
};

const userReducer = user.reducer
export { setUser, getUser, isLoggedIn, unsetUser, slice };
export default userReducer
