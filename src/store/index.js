import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./citiesSlice";


const store = configureStore({
    reducer: {
        exercises: exercisesReducer
    }
});

export default store;