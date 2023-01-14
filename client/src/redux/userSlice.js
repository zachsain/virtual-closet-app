import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
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
        const user = state.entities.find((u) => u.id === action.payload.id);
        user.url = action.payload.url;
      },
      pieceUpdated(state, action){
        // console.log(action.payload.id)
        const index = state.entities.pieces.findIndex((p) => p.id === action.payload.id);
        state.entities.pieces.splice(index, 1, action.payload); 
      },
      pieceAdded(state, action){
        state.entities.pieces.push(action.payload)
      },
      pieceDeleted(state, action){
        const index = state.entities.pieces.findIndex((p) => p.id === action.payload);
        state.entities.pieces.splice(index, 1);   
      }
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
  
export const { userAdded, pieceUpdated, pieceAdded, pieceDeleted, userUpdated} = userSlice.actions;

  
export default userSlice.reducer;
