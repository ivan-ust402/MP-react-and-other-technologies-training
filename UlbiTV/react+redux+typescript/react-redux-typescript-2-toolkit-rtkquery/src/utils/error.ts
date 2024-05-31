import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isRTKError = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (error && 'status' in error && 'error' in error){
    // you can access all properties of `FetchBaseQueryError` here
    // console.log("status: ", error.status)
    // console.log("ERROR: ", error.error);
    return true
  } else {
    // you can access all properties of `SerializedError` here
    // console.log("something went wrong!")
    return false
  }
}