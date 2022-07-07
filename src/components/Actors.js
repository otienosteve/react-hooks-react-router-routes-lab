import React from "react";
import { actors } from "../data";

function Actors() {
  return <>
  <h1>Actors Page</h1>
    {actors.map(actr=>{return <div key={actr.id}>
      <h3>Name: {actr.name}</h3>
      <p>Movies:</p>
      <ul>{actr.movies.map((mv,indx)=><li key={indx}>{mv}</li> )}</ul>
    </div>})}
    </>
}

export default Actors;
