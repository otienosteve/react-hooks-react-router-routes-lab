import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(drct=>{return <div key={drct.id}>
      <h3>Name: {drct.name}</h3>
      <p>Movies:</p>
      {drct.movies.map((mv,indx)=><li key={indx}>{mv}</li> )}
    </div>
    
    })} 
  </div>;
}

export default Directors;
