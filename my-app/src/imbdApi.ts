import axios from "axios";

// const ApiKey = '2f744b4480689d09e96be55cfad75d4f';

// const BASE_URL = 'https://api.themoviedb.org/3/authentication'

export const getApiData =  () => { 
  


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjc0NGI0NDgwNjg5ZDA5ZTk2YmU1NWNmYWQ3NWQ0ZiIsInN1YiI6IjYyZjZiOWQ4Mjc5MGJmMDA3ZDViYjY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lesAdoqBGNSKpkN3iS71mZKmbuH_qFhbDhTsv0TmNZE'
        }
      };

      axios.request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    

    // try {
    //     const response = await axios.get(`${BASE_URL}`, {
    //         headers: {
    //             Authorization: `Bearer ${ApiKey}`
    //         }
    //     })
    //     return response.data;
    // } catch(error) {
    //     console.error("Error fetching data: ", error);
    //     return [];
    // }
}

