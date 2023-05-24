import { createSlice } from '@reduxjs/toolkit'

const navStateSlice = createSlice({
  name: 'navState',
  initialState: {
    value: {
      currentCountry: 'AU',
      currentCurrency: 'AUD',
      currentExchangeRate: 1,
      currentShippingRate: 0,
      currentShippingName: '',
      currentOrderNumber: 0,
      cartOpen: false,
    },
  },
  reducers: {
    setCurrentExchangeRate: (state, action) => {
      state.value.currentExchangeRate = action.payload
    },
    setCartOpen: (state, action) => {
      state.value.cartOpen = action.payload
    },
    setCurrentCountryAndCurrency: (state, action) => {
      state.value.currentCountry = action.payload

      console.log('Setting Country')

      if (action.payload === 'US') {
        localStorage.setItem('currency', 'USD')
        console.log('Setting country FROM SETTER US')
        state.value.currentCurrency = 'USD'
        state.value.currentCountry = 'US'
      } else {
        localStorage.setItem('currency', 'AUD')
        console.log('Setting country FROM SETTER AUD')
        state.value.currentCurrency = 'AUD'
        state.value.currentCountry = 'AU'
      }
    },
    setCurrentShippingRate: (state, action) => {
      state.value.currentShippingRate = action.payload
    },
    setCurrentShippingName: (state, action) => {
      state.value.currentShippingName = action.payload
    },
    setCurrentOrderNumber: (state, action) => {
      state.value.currentOrderNumber = action.payload
      localStorage.setItem('currentOrderNumber', action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setCurrentCountryAndCurrency: setCurrentCountryAndCurrency,
  setCurrentExchangeRate: setCurrentExchangeRate,
  setCurrentShippingRate: setCurrentShippingRate,
  setCurrentShippingName: setCurrentShippingName,
  setCurrentOrderNumber: setCurrentOrderNumber,
  setCartOpen: setCartOpen,
} = navStateSlice.actions

// Selectors
export const getCurrentCountry = (state) => state.combinedReducer.navState.value.currentCountry
export const getCurrentCurrency = (state) => state.combinedReducer.navState.value.currentCurrency
export const getCurrentExchangeRate = (state) =>
  state.combinedReducer.navState.value.currentExchangeRate
export const getCurrentShippingRate = (state) =>
  state.combinedReducer.navState.value.currentShippingRate
export const getCurrentShippingName = (state) =>
  state.combinedReducer.navState.value.currentShippingName
export const getCurrentOrderNumber = (state) =>
  state.combinedReducer.navState.value.currentOrderNumber
export const getCartOpen = (state) => state.combinedReducer.navState.value.cartOpen

export default navStateSlice.reducer
