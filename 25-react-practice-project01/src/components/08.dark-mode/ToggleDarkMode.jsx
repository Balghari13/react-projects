import React, { useEffect, useState } from 'react'
import useTheme from './useTheme'

// const ToggleDarkMode = () => {
// const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme'))||false)
//   const handleTheme = ()=>{
//     localStorage.setItem('theme', JSON.stringify(theme))
// setTheme(!theme)
//   }
//   useEffect(()=>{
//      localStorage.setItem('theme', JSON.stringify(theme))
//   },[theme])
//   return (
//     <div className={`flex p-4 justify-center items-center flex-col gap-4 h-screen w-screen ${theme?'bg-black text-white': 'bg-white text-black'}`}>
//       <h1>ToggleDarkMode</h1>
//       <button className='p-2 bg-amber-300' onClick={handleTheme}>{theme?'Light':'Dark'}</button>

//     </div>
//   )
// }
const ToggleDarkMode = () => {
//const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme'))||'light')
const [theme,setTheme] = useTheme('theme','dark')


  const handleTheme = ()=>{
   setTheme(theme==='light'?'dark':'light')
  }

  return (
    <div className={`flex p-4 justify-center items-center flex-col gap-4 h-screen w-screen ${theme==='light'?'bg-black text-white': 'bg-white text-black'}`}>
      <h1>ToggleDarkMode</h1>
      <button className='p-2 bg-amber-300' onClick={handleTheme}>{theme?'Light':'Dark'}</button>

    </div>
  )
}

export default ToggleDarkMode