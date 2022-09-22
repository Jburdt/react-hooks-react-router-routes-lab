import React from "react";
import { directors } from "../data";

function Directors() {
  const filmDirectors = directors.map((director, index) => 
    <div key={index}> 
      <h2>
        Name: {director.name}
      </h2>
      <br></br>
          Movies: 
      <br></br>
      <ul>
          {director.movies.map((movie) => <li key={movie}>{movie}</li> )}
      </ul>    
    </div>
  )
  
  return( 
    <div>
    <h1>Directors Page</h1>
    {filmDirectors}
    </div>
  )
}

export default Directors;
