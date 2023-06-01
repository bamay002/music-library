import './App.css';
import React, { useState, useRef, Fragment } from 'react';
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import { DataContext } from './Context/DataContext';
import { SearchContext } from './Context/SearchContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumView from './Views/AlbumView'
import ArtistView from './Views/ArtistView'

document.title = 'Music Library'

function App() {

  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for music!')
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e ,term) => {
    e.preventDefault()
    // fetch data
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
          return setData(resData.results)
      } else {
          return setMessage('Not Found.')
      }
    }
  fetchData()
  }
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <SearchBar />
              </SearchContext.Provider>
                {message}
              <DataContext.Provider value={data}>
                <Gallery />
              </DataContext.Provider>
            </Fragment>
          } />
              <Route path='/album/:id' element={<AlbumView />} />
              <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
