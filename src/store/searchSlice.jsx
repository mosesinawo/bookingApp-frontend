import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: '',
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    }
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        newSearch: (state, action) => {
          state.city = action.payload.destination
          state.dates = action.payload.dates
          state.options = action.payload.options
        },
        resetSearch: (state) => {
            return initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const {newSearch, resetSearch  } = searchSlice.actions

export default searchSlice.reducer