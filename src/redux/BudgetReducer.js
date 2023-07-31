import React from 'react'
import {v4} from "uuid";
const initialState=localStorage.getItem("budgets")===null?[]:JSON.parse(localStorage.getItem("budgets"));
console.log((initialState));
const BudgetReducer = (state=initialState,action) => {
  if (action.type==="addbudget")
  {
    localStorage.setItem("budgets",JSON.stringify([...state,{...action.payload,id:v4()}]))
  return [...state,{...action.payload,id:v4()}]}
  else if (action.type==="deletebudget")
  {
    localStorage.setItem("budgets",JSON.stringify(state.filter((e)=>e.id!==action.payload)))
  return state.filter((e)=>e.id!==action.payload)
  }else 
  return state
}

export default BudgetReducer
