import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from './_store'

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
    setCurrentExchangeRate: (
      state: { value: { currentExchangeRate: number } },
      action: PayloadAction<number>
    ) => {
      state.value.currentExchangeRate = action.payload
    },
    setCartOpen: (state: { value: { cartOpen: boolean } }, action: PayloadAction<boolean>) => {
      state.value.cartOpen = action.payload
    },
    setCurrentCountryAndCurrency: (
      state: { value: { currentCountry: string; currentCurrency: string } },
      action: PayloadAction<string>
    ) => {
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
    setCurrentShippingRate: (
      state: { value: { currentShippingRate: number } },
      action: PayloadAction<number>
    ) => {
      state.value.currentShippingRate = action.payload
    },
    setCurrentShippingName: (
      state: { value: { currentShippingName: string } },
      action: PayloadAction<string>
    ) => {
      state.value.currentShippingName = action.payload
    },
    setCurrentOrderNumber: (
      state: { value: { currentOrderNumber: number } },
      action: PayloadAction<number>
    ) => {
      state.value.currentOrderNumber = action.payload
      localStorage.setItem('currentOrderNumber', action.payload as unknown as string)
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
export const getCurrentCountry = (state: RootState) =>
  state.combinedReducer.navState.value.currentCountry
export const getCurrentCurrency = (state: RootState) =>
  state.combinedReducer.navState.value.currentCurrency
export const getCurrentExchangeRate = (state: RootState) =>
  state.combinedReducer.navState.value.currentExchangeRate
export const getCurrentShippingRate = (state: RootState) =>
  state.combinedReducer.navState.value.currentShippingRate
export const getCurrentShippingName = (state: RootState) =>
  state.combinedReducer.navState.value.currentShippingName
export const getCurrentOrderNumber = (state: RootState) =>
  state.combinedReducer.navState.value.currentOrderNumber
export const getCartOpen = (state: RootState) => state.combinedReducer.navState.value.cartOpen

export default navStateSlice.reducer
