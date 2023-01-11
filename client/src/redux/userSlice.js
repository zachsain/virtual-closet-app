import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("cats/fetchCats", () => {
    // return a Promise containing the data we want
    return fetch("/me")
      .then((response) => response.json())
      .then((data) => (console.log(data), data));
  });
  

// Reducers

const initialState = {
    entities: [], 
    status: "idle", 
  };

const userSlice = createSlice({
    name: "user",
    initialState: {
      entities: [], 
      status: "idle", 
    },
    reducers: {
      userAdded(state, action) {
        state.entities.push(action.payload);
      },
      userUpdated(state, action) {
        const user = state.entities.find((u) => user.id === action.payload.id);
        user.url = action.payload.url;
      },
    },
    extraReducers: {
      [fetchUser.pending](state) {
        state.status = "loading";
      },
      [fetchUser.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
      },
    },
});
  
export const { catAdded, catUpdated } = userSlice.actions;

  
export default userSlice.reducer;
