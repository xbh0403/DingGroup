import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';

import { getPapersAsync } from './thunks';

const initialState = {
    papers: [],
    requestState: REQUEST_STATE.IDLE,
    error: null
};

export const papersSlice = createSlice({
    name: 'papers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPapersAsync.pending, (state, action) => {
                state.requestState = REQUEST_STATE.PENDING;
            })
            .addCase(getPapersAsync.fulfilled, (state, action) => {
                state.requestState = REQUEST_STATE.FULFILLED;
                state.papers = action.payload;
            })
            .addCase(getPapersAsync.rejected, (state, action) => {
                state.requestState = REQUEST_STATE.REJECTED;
                state.error = action.payload;
            });
    }
});

export default papersSlice.reducer;
