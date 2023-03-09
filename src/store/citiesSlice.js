import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const citiesArray = ['barcelona', 'newyork', 'dubai', 'mexicocity', 'sanfrancisco', 'nashville', 'prague', 'london', 'dublin', 'lisbon', 'lagos', 'kyiv', 'paris', 'tokyo', 'rome', 'madrid', 'singapore', 'amsterdam', 'chicago', 'berlin', 'hongkong', 'beijing', 'istanbul', 'milan', 'budapest', 'toronto', 'sydney', 'seoul', 'doha', 'abudhabi', 'osaka', 'bangkok', 'vienna', 'saopaulo', 'zurich', 'melbourne', 'warsaw', 'buenosaires', 'tegucigalpa', 'copenhagen', 'bruge', 'helsinki', 'frankfurt', 'atlanta', 'stockholm', 'athens', 'riodejaneiro', 'telaviv', 'oslo', 'taipei', 'calgary', 'portland', 'santiago', 'mumbai', 'shanghai', 'bilbao', 'neworleans', 'riyadh', 'jerusalem', 'nagoya', 'hanoi', 'goteborg'];
console.log(citiesArray.length);

for (const city of citiesArray) {};
/// but ideally would not continue to make requests to the api because I only get a certain amount. 
// could I store these?

export const fetchCitiesAsync = createAsyncThunk("exercises", async (city) => {
    try {
        const authKey = btoa('a4c6f38fc905252936dd18cd640e9c8d:475ffdce9486c768cb38a207ea4cd857');
        const {data} = await axios({
        method: 'get',
        url: "https://api.roadgoat.com/api/v2/destinations/auto_complete?q=" + city,
        headers: {
            'Authorization': `Basic ${authKey}`}
    })
    console.log('data', data)
    return data;
    } catch (err) {
        console.error(err)
    }
});





export const CitiesSlice = createSlice({
    name: "cities",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCitiesAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectCities = (state) => state.cities;

export default CitiesSlice.reducer;