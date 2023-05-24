import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ReceiptItem } from '../data/interfaces'
import { RootState } from './_store'

const checkoutStateSlice = createSlice({
  name: 'checkoutState',
  initialState: {
    value: {
      checkoutPosition: 'cart',
      finalValue: 0,
      discountApplied: false,
      confirmAndPay: false,
      receiptItems: [] as ReceiptItem[],
    },
  },
  reducers: {
    setCheckoutPosition: (
      state: { value: { checkoutPosition: string } },
      action: PayloadAction<string>
    ) => {
      state.value.checkoutPosition = action.payload
    },
    setFinalValue: (state: { value: { finalValue: number } }, action: PayloadAction<number>) => {
      state.value.finalValue = action.payload
    },
    setDiscountApplied: (
      state: { value: { discountApplied: boolean } },
      action: PayloadAction<boolean>
    ) => {
      state.value.discountApplied = action.payload
    },
    setConfirmAndPay: (
      state: { value: { confirmAndPay: boolean } },
      action: PayloadAction<boolean>
    ) => {
      state.value.confirmAndPay = action.payload
    },
    setReceiptItems: (
      state: { value: { receiptItems: ReceiptItem[] } },
      action: PayloadAction<ReceiptItem[]>
    ) => {
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
  setReceiptItems: setReceiptItems,
} = checkoutStateSlice.actions

// Selectors
export const getCheckoutPosition = (state: RootState) =>
  state.combinedReducer.checkoutState.value.checkoutPosition
export const getFinalValue = (state: RootState) =>
  state.combinedReducer.checkoutState.value.finalValue
export const getDiscountApplied = (state: RootState) =>
  state.combinedReducer.checkoutState.value.discountApplied
export const getConfirmAndPay = (state: RootState) =>
  state.combinedReducer.checkoutState.value.confirmAndPay
export const getReceiptItems = (state: RootState) =>
  state.combinedReducer.checkoutState.value.receiptItems

export default checkoutStateSlice.reducer
