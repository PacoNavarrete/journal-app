import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      login: ( state, action ) => {

      },
      logout: ( state, payload ) => {

      },
      checkingCredentials: ( state, action ) => {
        state.status = action.payload
      }
  }
});

export const {login, logout, checkingCredentials} = authSlice.actions