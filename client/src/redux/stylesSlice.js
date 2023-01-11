import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStyles = createAsyncThunk("user/fetchStyles", () => {
    // return a Promise containing the data we want
    return fetch("/styles")
      .then((response) => response.json())
      .then((data) => (data));
  });
  

// Reducers

const initialState = {
    entities: [], 
    status: "idle", 
  };

const stylesSlice = createSlice({
    name: "styles",
    initialState: {
      entities: [], 
      status: "idle", 
    },
    reducers: {
      styleAdded(state, action) {
        state.entities.push(action.payload);
      },
      styleUpdated(state, action) {
        const user = state.entities.find((u) => user.id === action.payload.id);
        user.url = action.payload.url;
      },
    },
    extraReducers: {
      [fetchStyles.pending](state) {
        state.status = "loading";
      },
      [fetchStyles.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
      },
    },
});
  
export const { styleAdded, styleUpdated } = stylesSlice.actions;

  
export default stylesSlice.reducer;
