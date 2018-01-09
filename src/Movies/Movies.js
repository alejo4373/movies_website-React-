// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import moviesAPI from "./moviesAPI";
// Import React Components
import MovieLayout from "./MovieLayout";
import MovieList from "./MovieList";

class Movies extends React.Component {

  renderMovie = props => {
    const { id } = props.match.params;
    const movie = moviesAPI.getOne(id);
    if (!movie) {
      return <div> Could not find movie </div>;
    } else {
      return <MovieLayout movie={movie}
                          rateMovieHandler={this.props.rateMovie}
                          ratings={this.props.ratings} />;
    }
  };

  renderMovieList = () => {
    const movies = moviesAPI.getAll();
    return <MovieList movies={movies} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      <div className='sample rating'></div>
      </div>
    );
  }
}
export default Movies;
