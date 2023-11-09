/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";




export const Search = () => {
  const [query, setQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);
  const [watchList, setWatchList] = useState<any[]>([]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList))
  }, [watchList])

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie?include_adult=true&language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjc0NGI0NDgwNjg5ZDA5ZTk2YmU1NWNmYWQ3NWQ0ZiIsInN1YiI6IjYyZjZiOWQ4Mjc5MGJmMDA3ZDViYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lesAdoqBGNSKpkN3iS71mZKmbuH_qFhbDhTsv0TmNZE",
      },
      params: {
        query: query
      }
    };
    if (query) {
      axios
        .request(options)
        .then((response) => {
          setResults(response.data.results);
         
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }    

    
  };

  const fetchMovieCredits = (movieId: number) => {
    const creditOptions = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjc0NGI0NDgwNjg5ZDA5ZTk2YmU1NWNmYWQ3NWQ0ZiIsInN1YiI6IjYyZjZiOWQ4Mjc5MGJmMDA3ZDViYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lesAdoqBGNSKpkN3iS71mZKmbuH_qFhbDhTsv0TmNZE",
      },
    }

    axios.request(creditOptions)
    .then((response) => {
      const updatedResults = results.map((movie) => 
        movie.id === movieId ? {...movie, cast: response.data.cast} : movie
      );

      setResults(updatedResults)
    })
    .catch((error) => {
      console.error("Error fetching credits: ", error);
    })

  }

  const addToWatchList = (movie: any) => {
    setWatchList((prevWatchList) => [...prevWatchList, movie]);

    
  }
  console.log("watchlist: ", watchList)

  return (
    <div className="search-div">

      <input
      type="text"
      placeholder="Search for movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <div className="lists-div">
        <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button onClick={() => fetchMovieCredits(movie.id)}>
              Show Cast
            </button>
            <button onClick={() => addToWatchList(movie)}>Add</button>
            {movie.cast && (
              <ul>
               
                {movie.cast.map((actor: any) => (
                  <li key={actor.id}>{actor.name}</li>
                ))}
              </ul>
            )}
              </li>
          ))}
        </ul>
        <div className="watchList">
                <h2>Watch List</h2>
        
        <ul>
          {watchList.map((watchList) => (
            <li key={watchList.id}>
              {watchList.title}

            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  )

};
