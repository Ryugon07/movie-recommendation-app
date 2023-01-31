import "./styles.css";
import React, { useState } from "react";

const movieList = {
  horror: ["The Last of Us", "The Menu"],
  comedy: ["That '90s Show", "The White Lotus"],
  srk: ["K3G", "Kal ho na ho"]
};

const knownMovieList = Object.keys(movieList);

export default function App() {
  const [meaning, setMeaning] = useState([]);

  function movieClickHandler(genre) {
    var meaning = movieList[genre];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>goodwatch</h1>
      <h3>Checkout my favorite books. Select a genre to get started</h3>
      {knownMovieList.map(function (genre) {
        return (
          <span
            onClick={() => movieClickHandler(genre)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={genre}
          >
            {genre}
          </span>
        );
      })}

      <ul>
        {meaning.map((genres) => {
          return (
            <li key={genres} style={{ padding: "1rem" }}>
              {" "}
              {genres}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
