import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchInput'>
       <label htmlFor="search">
        <input 
        type="searchbox" 
        id=''
        className='search'
        required
        value={s}/>
        </label> 
    </form>
  )
}

export default SearchItem