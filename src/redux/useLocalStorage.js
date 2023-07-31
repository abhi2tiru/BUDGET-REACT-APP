import  { useEffect, useState } from 'react'


export default  (key,defaultValue) => {
  const [value,setValue]=useState(defaultValue);
  const json=JSON.parse(localStorage.getItem(key));
  
  useEffect(()=>{
    localStorage.setItem(key,value);
  },[key,value]);
  if (json===null)
  return [value,setValue];
  else
  {
    setValue(json);
  return [value,setValue];
  } 
}

