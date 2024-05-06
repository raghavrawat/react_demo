import './App.css';
import { useState, useEffect, useRef } from 'react'
import GIFContainer from './components/GIFContainer';
import SearchInput from './components/SearchInput';
import ThemeProvider from './components/ThemeProvider';

const api_key = '6yEFb6UscixHzb2VMP1NmU2eJq8pBgBm'
const limit = 10

function App() {
  const [giphies, setGiphies] = useState([])
  const [loading, setLoading] = useState(true)
  const loadMoreRef = useRef(null)

  const fetchGiphies = () => {
    setLoading(true)

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`)
    .then(res => res.json())
    .then(data => setGiphies((prev) => [...prev, data.data]))
    setLoading(false)
  }

    useEffect (() => {
        fetchGiphies()
    }, [])

    useEffect (() => {
        const observer = new IntersectionObserver(
          (entries, observerInstance) => {
            if (entries[0].isIntersecting && !loading) {
              console.log('more giphies')
              fetchGiphies()
            }
          },
          { threshold: 1.0 }
        )

        if(loadMoreRef.current) {
          observer.observe(loadMoreRef.current)
        }

        return () => {
          if(loadMoreRef.current){
            observer.unobserve(loadMoreRef.current)
          }
        }
    }, [giphies, loading])


  const onHandleChange = (value) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${value}&limit=${limit}`)
    .then(res => res.json())
    .then(data => setGiphies(data.data))
  }

  return (
    <div className="App">
      <ThemeProvider>
        <SearchInput onChange={onHandleChange} />
        <GIFContainer giphies={giphies} />
        {loading && <p ref={loadMoreRef}>Loading.....</p>}
      </ThemeProvider>
    </div>
  );
}

export default App;
