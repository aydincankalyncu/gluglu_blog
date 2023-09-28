const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("../slices/userSlice/userSlice");

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
