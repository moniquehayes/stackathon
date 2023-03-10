import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesSlice";


const store = configureStore({
    reducer: {
        cities: citiesReducer
    }
});

export default store;