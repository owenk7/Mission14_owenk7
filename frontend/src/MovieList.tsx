import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from './movie';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get<Movie[]>('https://localhost:4000/Movie')
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Podcasts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <body>
        <center>
          <h3>Joel Hilton's Latest Movie Reviews:</h3>

          <table className="movie-table">
            <thead>
              <tr>
                <th>MovieId</th>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>LentTo</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.movieId}>
                  <td>{movie.movieId}</td>
                  <td>{movie.title}</td>
                  <td>{movie.category}</td>
                  <td>{movie.year}</td>
                  <td>{movie.director}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.edited}</td>
                  <td>{movie.lentTo}</td>
                  <td>{movie.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </body>
    </div>
  );
}

export default MovieList;
