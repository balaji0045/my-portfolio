import { createContext, useEffect, useState } from "react";



export const ThemeContext=createContext();


export const ThemeProvider=({children})=>{
  const [theme,setTheme]=useState('dark');

     useEffect(()=>{
      const savedTheme=localStorage.getItem('theme')
      if(savedTheme){
        setTheme(savedTheme);
      }
     },[])

     useEffect(()=>{
      localStorage.setItem('theme',theme);
     },[theme])

 const toggleTheme=()=>{
    setTheme((prevtheme)=>(prevtheme === 'light'?'dark':'light'))
 }

    return(
      <ThemeContext.Provider value={{toggleTheme,theme}}>
    {children}
      </ThemeContext.Provider>
    );


}