import { useState } from "react";
import "./style.css";

const data = [
  {
    id: 1,
    name: "Barbie",
    img: "https://www.gamespot.com/a/uploads/scale_medium/1597/15976769/4121663-margot.jpg",
    description: "The Barbie movie",
    price: "25",
  },
  {
    id: 2,
    name: "Gran Turismo",
    img: "https://upload.wikimedia.org/wikipedia/ru/thumb/2/20/GranTurismoMoviePoster.jpeg/800px-GranTurismoMoviePoster.jpeg",
    description: "Gran Turismo movie",
    price: "10",
  },
  {
    id: 3,
    name: "Oppenheimer",
    img: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    description: "Oppenheimer movie",
    price: "15",
  },
  {
    id: 4,
    name: "Blue Beetle",
    img: "https://m.media-amazon.com/images/M/MV5BODkyZjcyOGMtZWVhYy00ZWEyLWJlZDItZDA2OTBhNGZmMjBiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    description: "Blue Beetle movie",
    price: "20",
  },
  {
    id: 5,
    name: "Transformers",
    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/61e42a9b98294388a0142982723ecb503570de21f0a673af076b6d68ba88d8e9._RI_TTW_.jpg",
    description: "Transformers movie",
    price: "16",
  },
  {
    id: 6,
    name: "Mission Impossible",
    img: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_FMjpg_UX1000_.jpg",
    description: "Mission Impossible movie",
    price: "12",
  },
];

export default function App() {
  const [movies, setMovies] = useState(data);
  const [showMovieDescription, setShowMovieDescription] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleMovieSelection(movie) {
    setSelectedMovie((cur) => (cur?.id === movie.id ? null : movie));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <MovieList movies={movies} onSelection={handleMovieSelection} />
      </div>
      <MakeOrder
        showMovieDescription={showMovieDescription}
        selectedMovie={selectedMovie}
      />
    </div>
  );
}

function MovieList({ movies, selectedMovie, onSelection }) {
  return (
    <ul>
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          selectedMovie={selectedMovie}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelection }) {
  return (
    <li>
      <img src={movie.img} alt={movie.name} />
      <h3>{movie.name}</h3>
      <p>Price: {movie.price} $</p>
      <button className="button" onClick={() => onSelection(movie)}>
        More
      </button>
    </li>
  );
}

function MakeOrder({ selectedMovie }) {
  return (
    selectedMovie && (
      <form className="form-make-order">
        <h2>Make order - {selectedMovie.name}</h2>
        <p>Description</p>
        <p>{selectedMovie.description}</p>
        <label>Ticket's price</label>
        <input type="text" value={selectedMovie.price} />
        <button className="button">Order</button>
      </form>
    )
  );
}

// D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\8. [Optional] Practice Project Eat-'N-Split
// посмотреть 100-й видос, там он передает данные в дочерний компонент
