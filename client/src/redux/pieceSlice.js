import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPieces = createAsyncThunk("user/fetchStyles", () => {
    // return a Promise containing the data we want
    return fetch("/pieces")
      .then((response) => response.json())
      .then((data) => (data));
  });
  

// Reducers
const initialState = {
    entities: [], 
    status: "idle", 
  };

const pieceSlice = createSlice({
    name: "pieces",
    initialState: {
      entities: [], 
      status: "idle", 
    },
    reducers: {
      pieceAdded(state, action) {
        state.entities.push(action.payload);
      },
      pieceUpdated(state, action) {
        const piece = state.entities.find((piece) => piece.id === action.payload.id);
        console.log(piece)
      },
    },
    extraReducers: {
      [fetchPieces.pending](state) {
        state.status = "loading";
      },
      [fetchPieces.fulfilled](state, action) {
        state.entities = action.payload;
        state.status = "idle";
      },
    },
});
  
export const { pieceAdded, pieceUpdated  } = pieceSlice.actions;

  
export default pieceSlice.reducer;
