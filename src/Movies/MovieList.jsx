import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  width: '409px'
}

const MovieList = ({ movies }) => (
  <div style={cardStyle} className='ui container center aligned segment'>
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          {movie.title} ({movie.year})
        </Link>
      </li>
    ))}
  </ul>
  </div>
);

export default MovieList;
