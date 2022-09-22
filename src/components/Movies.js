import React from "react";
import { movies } from "../data";
// import NavBar from "./NavBar";

function Movies() {

  const showMovies = movies.map((film, index) => ( 
        <div key={index}> 
          <h2>Name: {film.title}
          </h2> 
            <br></br> 
            Time: {film.time} 
            <br></br>
            Genres:
          <ul>
            {film.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>    
        </div>
      )
    )

  return( 
    <div>
      <h1>Movies Page</h1>
      {showMovies}
    </div>
  )
}

export default Movies;
