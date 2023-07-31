import {v4} from 'uuid'
const initialState=localStorage.getItem("expenses")===null?[]:JSON.parse(localStorage.getItem("expenses"));
console.log((initialState));
const ExpenseReducer = (state=initialState,action) => {
  console.log(action.type);  
  if (action.type=="addexpense")
  {localStorage.setItem("expenses",JSON.stringify([...state,{...action.payload,id:v4()}]));
  return [...state,{...action.payload,id:v4()}]
  }else if (action.type=="deleteExId")
  { localStorage.setItem("expenses",JSON.stringify(state.filter((e)=>e.id!==action.payload)));
    return state.filter((e)=>e.id!==action.payload)}
  else 
  return state;
}

export default ExpenseReducer
