import React from "react";
import { actors, movies } from "../data";

function Actors() {

  const mappedActors = actors.map((actor, index) =>
   <div key={index}>
    <h2>
      Name: {actor.name}
    </h2>
      <br></br>
      Movies:
     <ul>
      {actor.movies.map((movie, index) => <li key={index}>{movie}</li> )}
     </ul>
   </div>
   )

  return <div>
    <h1>Actors Page</h1>
    {mappedActors}
    </div>;
}

export default Actors;
