import { createSlice } from '@reduxjs/toolkit'

const checkoutStateSlice = createSlice({
  name: 'checkoutState',
  initialState: {
    value: {
      checkoutPosition: 'cart',
      finalValue: 0,
      discountApplied: false,
      confirmAndPay: false,
      receiptItems: [],
    },
  },
  reducers: {
    setCheckoutPosition: (state, action) => {
      state.value.checkoutPosition = action.payload
    },
    setFinalValue: (state, action) => {
      state.value.finalValue = action.payload
    },
    setDiscountApplied: (state, action) => {
      state.value.discountApplied = action.payload
    },
    setConfirmAndPay: (state, action) => {
      state.value.confirmAndPay = action.payload
    },
    setReceiptItems: (state, action) => {
      state.value.receiptItems = action.payload
      localStorage.setItem('receiptItems', JSON.stringify(action.payload))
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setCheckoutPosition: setCheckoutPosition,
  setFinalValue: setFinalValue,
  setDiscountApplied: setDiscountApplied,
  setConfirmAndPay: setConfirmAndPay,
} = checkoutStateSlice.actions

// Selectors
export const getCheckoutPosition = (state) =>
  state.combinedReducer.checkoutState.value.checkoutPosition
export const getFinalValue = (state) => state.combinedReducer.checkoutState.value.finalValue
export const getDiscountApplied = (state) =>
  state.combinedReducer.checkoutState.value.discountApplied
export const getConfirmAndPay = (state) => state.combinedReducer.checkoutState.value.confirmAndPay

export default checkoutStateSlice.reducer
