import { combineReducers } from "redux";
import papersReducer from "../papers/reducer";
import peopleReducer from "../people/reducer";


export default combineReducers({
    papers: papersReducer,
    people: peopleReducer
});
