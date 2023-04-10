import React, { useState, useEffect } from "react";
import axios from "axios";
import './Portfolio.css';
import { Link } from 'react-router-dom'

function Cartoon() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
        <Link to={'/'}>
          <button className="probtn">Profile</button>
        </Link>
      <Link to={'/calculator'}>
        <button className="Calbtn">Calculator</button>
        </Link>
    <div className="char">
      <h1 className="car-head">Rick n Morty Characters</h1>
      {Data?.map((character) => (
        <div className="car-div" key={character.id}>
        <div>
          <img className="car-img" src={character.image} alt="" />
        </div>
        <div>
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Species: {character.species}</p>
        </div>
        </div>
      ))}
    </div>
    </React.Fragment>
  );
}

export default Cartoon;