import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk("user/fetchBrands", () => {
    // return a Promise containing the data we want
    return fetch("/brands")
      .then((response) => response.json())
      .then((data) => (data));
  });
  

// Reducers

const initialState = {
    entities: [], 
    status: "idle", 
  };

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
      entities: [], 
      status: "idle", 
    },
    reducers: {
      brandAdded(state, action) {
        state.entities.push(action.payload);
      },
      brandUpdated(state, action) {
        const user = state.entities.find((u) => user.id === action.payload.id);
        user.url = action.payload.url;
      },
    },
    extraReducers: {
      [fetchBrands.pending](state) {
        state.status = "loading";
      },
      [fetchBrands.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
      },
    },
});
  
export const { brandAdded, brandUpdated } = brandsSlice.actions;

  
export default brandsSlice.reducer;
