import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PapersService from './service';

export const getPapersAsync = createAsyncThunk(
    actionTypes.GET_PAPERS,
    async () => {
        return await PapersService.getPapers();
    }
);