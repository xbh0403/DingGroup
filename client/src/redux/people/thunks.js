import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import PeopleService from './service';

export const getPeopleAsync = createAsyncThunk(
    actionTypes.GET_PEOPLE,
    async () => {
        return await PeopleService.getPeople();
    }
);