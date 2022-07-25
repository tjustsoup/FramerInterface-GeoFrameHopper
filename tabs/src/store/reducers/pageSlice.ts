import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: 'Page',
  initialState: {
    data: 'Main'
  },
  reducers: {
    setPage: (state: any, input: any) => {
      console.log(input)
      state.data = input.payload;
    },
  },
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer;