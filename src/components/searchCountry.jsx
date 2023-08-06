import React, { useState } from 'react'
export default function SearchCountry({onSearch}) {

    const [input, setInput] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        onSearch(input)
    }
    return (
        <div className="content-search-filter" id="content-search-filter">
            <form onChange={(e)=>submitHandler(e)} className="input-search">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for a country" 
                defaultValue={input} onChange={(e)=>
                setInput(e.target.value)}/>
            </form>
        </div>
        )
    }
  
