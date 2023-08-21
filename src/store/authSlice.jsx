import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendUrl } from "../config/__urls";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${backendUrl}` }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query(user) {
        return {
          url: `/auth/login`,
          method: 'POST',
          body: user,
          credentials: 'include',
        }
      },
      invalidatesTags:['Auth']
    }),
  }),
})


const initialState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions
export const user = (state) => state.user;

export default authSlice.reducer

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation } = authApi