import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideNav: false,
  searchFullScreen: false,
  searchQuery: '',
  width: window.innerWidth,
  products: localStorage.getItem('compareCart') ? JSON.parse(localStorage.getItem('compareCart')) : [],
  gridViewActive: true,
  listViewActive: false,
  debounceDelay: 250,
}

export const slice = createSlice({
  name: 'EBikeLelo',
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.sideNav = !state.sideNav
    },
    toggleSearchFullScreen: (state) => {
      state.searchFullScreen = !state.searchFullScreen
    },
    searchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setWidth: (state, action) => {
      state.width = action.payload
    },
    toggleGridView: (state) => {
      state.gridViewActive = !state.gridViewActive
    },
    toggleListView: (state) => {
      state.listViewActive = !state.listViewActive
    },
  },
})

export const {
  toggleSideNav,
  toggleSearchFullScreen,
  searchQuery,
  setWidth,
  toggleGridView,
  toggleListView,
} = slice.actions

export default slice.reducer