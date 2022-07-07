import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(mv=>{return <div key={mv.id}>
      <h3>Name: {mv.title}</h3>
      <p>Time: {mv.time}</p>
      <p>Genres:</p>
     {mv.genres.map((gn,indx)=><li key={indx}>{gn}</li>)}
    </div>})}</div>;
}

export default Movies;
