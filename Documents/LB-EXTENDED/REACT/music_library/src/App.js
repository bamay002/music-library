import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'

document.title = 'Music Library'


function App() {

  let [search, setSearch] = useState("")
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for music!')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      document.tite = `${search} Music`
      fetch(API_URL + search)
      .then(res => res.json())
      .then(resData => {
        if (resData.results.length > 0){
          setData(resData.results)
        }
        else {
          setMessage('No results found ! lol')
        }
      })
    }
  }, [search])

  const handleSearch = (e ,term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />

    </div>
  );
}

export default App;
