import React,{ useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

function SearchBar(){
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>

            <input type="text" placeholder="Search here!" ref={term} />

            <input type="submit" onClick={(e) => handleSearch(e, term.current.value)} />

        </form>
    )
}


export default SearchBar
