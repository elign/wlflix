import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import MovieGrid from "./components/MovieGrid";
import ErrorBlock from "./components/ErrorBlock";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const handleClose = () => {
    setErrorMessage(null);
    setSearchTerm("");
  };

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=e9ee6f41&count=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setErrorMessage(data);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="App">
      <h1>WLFLIX</h1>
      <SearchForm
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {errorMessage && (
        <ErrorBlock
          title="Error"
          message={errorMessage.Error}
          onClose={handleClose}
        />
      )}
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
