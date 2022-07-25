import { configureStore } from "@reduxjs/toolkit"
import pageReducer from "./reducers/pageSlice"

export default configureStore({
  reducer: {
    page: pageReducer,
  }
})