import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';

import { getPeopleAsync } from './thunks';

const initialState = {
    people: [],
    requestState: REQUEST_STATE.IDLE,
    error: null
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPeopleAsync.pending, (state, action) => {
                state.requestState = REQUEST_STATE.PENDING;
            })
            .addCase(getPeopleAsync.fulfilled, (state, action) => {
                state.requestState = REQUEST_STATE.FULFILLED;
                state.people = action.payload;
            })
            .addCase(getPeopleAsync.rejected, (state, action) => {
                state.requestState = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            });
    }
});

export default peopleSlice.reducer;
