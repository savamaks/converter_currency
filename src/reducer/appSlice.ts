import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusLoadingNameCurrency: "",
    currencyTo: "USD",
    currencyFrom: "RUB",
    allCurrencyKey: [],
    allCurrencyName: [],
    resultConvert: 0,
};

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        changeLoad(state, action) {
            state.statusLoadingNameCurrency = action.payload;
        },
        changeCurrencyTo(state, action) {
            state.currencyTo = action.payload;
        },
        changeCurrencyFrom(state, action) {
            state.currencyFrom = action.payload;
        },
        addCurenncyKey(state, action) {
            state.allCurrencyKey = action.payload;
        },
        addCurenncyName(state, action) {
            state.allCurrencyName = action.payload;
        },
        changeResultConver(state, action) {
            state.resultConvert = action.payload;
        },
    }
});
export default appSlice.reducer;

export const { changeResultConver, changeLoad, changeCurrencyTo, changeCurrencyFrom, addCurenncyKey, addCurenncyName } = appSlice.actions;
