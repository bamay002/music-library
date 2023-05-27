import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Components/Gallery'
import SearchBar from './Components/SearchBar'
import { DataContext } from './Context/DataContext';


function App() {

  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for music!')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search) {
        const fetchData = async () => {
            document.title = `${search} music`
            const response = await fetch(API_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
                return setData(resData.results)
            } else {
                return setMessage('Not Found.')
            }
        }
        fetchData()
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
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>

    </div>
  );
}

export default App;
