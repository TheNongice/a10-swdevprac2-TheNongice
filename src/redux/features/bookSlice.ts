import { createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        // TODO: Add the reducer to add a new booking item
    }
});