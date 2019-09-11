import  {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkmode=()=>{
    const[storedValue,setStoredValue]=useLocalStorage('darkmode')
    useEffect(()=>{
        const darkModeActive=localStorage.getItem('darkmode')==='true';
        //console Logging
        console.log(darkModeActive);
        darkModeActive ? document.body.classList.add('dark-mode'):document.body.classList.remove('dark-mode');

    },[storedValue])
    return[storedValue,setStoredValue]
};
export default useDarkmode;