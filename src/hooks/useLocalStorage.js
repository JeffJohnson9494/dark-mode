import {useState} from 'react';

 const useLocalStorage=(key,initialValue)=>{
    const[storedValue,setStoredValue]=useState(()=>{
        const item= window.localStorage.getItem(key);
        return item ? JSON.parse(item):initialValue;
    });
    const setValue=value=>{
        //Saving State
        setStoredValue(value);
        //Stringify state to local storage
        window.localStorage.setItem(key,JSON.stringify(value))
    };
    return[storedValue,setValue];
};
export default useLocalStorage;