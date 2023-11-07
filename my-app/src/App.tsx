import { useEffect, useState } from "react";

import "./App.css";
import { getApiData } from "./imbdApi";
function App() {
  



  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="background">
      <div></div>
      {/* {movieData ? (
        <div>
          <h2>{movieData.title}</h2>
          <p>{movieData.overview}</p>
          </div>

      ) : (
        <p>Loading movie details...</p>
      )} */}
    </div>
  );
}

export default App;
