import {useState} from 'react';
import axios from 'axios';

export const Search = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [result, setResults] = useState([]);

    const handleSearch = () => {


        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjc0NGI0NDgwNjg5ZDA5ZTk2YmU1NWNmYWQ3NWQ0ZiIsInN1YiI6IjYyZjZiOWQ4Mjc5MGJmMDA3ZDViYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lesAdoqBGNSKpkN3iS71mZKmbuH_qFhbDhTsv0TmNZE'
            }
          };
        if(query){
            axios.request(options)
            .then((response) => {
                setResults(response.data.results)
                onSearch(response.data.results)
            }).catch((error) => {
                console.error("Error fetching data: ", error);
            });


        }
          
        
    }
}