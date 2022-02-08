import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const inputRef = React.useRef(null)
  const searchCocktail = (e)=>{
    setSearchTerm( inputRef.current.value)
  }

  useEffect(()=>{
    inputRef.current.focus()
  }, [])
  
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label for="name">Search your favourite cocktail</label>
          <input 
            id='name' 
            type='text' 
            ref={inputRef} 
            onChange={searchCocktail}/>
        </div>
      </form>

    </section>
  )
}

export default SearchForm
