import React, { useState } from 'react'
import { useDarkMode } from './DarkModeContext'
export default function SearchCountry({onSearch}) {

const [input, setInput] = useState('')
const {darkMode} = useDarkMode()

const submitHandler = () =>{
    onSearch(input)
}
return (
    <div className={`content-search-filter ${darkMode? "content-search-filter-dark": ""}`} id="content-search-filter">
        <form onChange={submitHandler} className="form-search" onSubmit={(e)=> (e.preventDefault())}>
            <i class="fa-solid fa-magnifying-glass" style={darkMode ?{color: "#fff"} :{color: "#000000"}}></i>
            <input type="text" placeholder="Search for a country" className='input-search'
            defaultValue={input} onChange={(e)=>setInput(e.target.value)}/>
        </form>
    </div>
    )
}
  
