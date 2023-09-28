const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  authenticated: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthenticated: (state, action) =>{
      state.authenticated = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export default userSlice;
export const { setUser, clearUser, setAuthenticated } = userSlice.actions;
