import { combineReducers, createStore } from "redux"
import BudgetReducer from "./BudgetReducer";
import ExpenseReducer from "./ExpenseReducer";
const reducer=combineReducers({BudgetReducer,ExpenseReducer,});
const store=createStore(reducer);
export default store;