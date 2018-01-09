// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import moviesAPI from "../Movies/moviesAPI"
import Select from "../Categories/Select_comp"
import MovieList from "../Movies/MovieList"

const cardStyle = {
  width: '409px'
}

class ByRating extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      ratingSelected: '',
      movies: []
    }
    this.ratings = [ '1', '2', '3', '4', '5']
  }

  handleSelectChange = e => {
    const rating = e.target.value
    const { ratings } = this.props
    let newMovies = []

    for (let key in ratings) {
      if(ratings[key] === rating){
       newMovies = [...newMovies, moviesAPI.getOne(key)]
      } 
    }

   this.setState({
      ratingSelected: rating,
      movies: newMovies 
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div style={cardStyle} className='ui container center aligned segment'>
        <h2>Categories</h2>
        <Select name='catergories' values={this.ratings} handler={this.handleSelectChange}/>
        <MovieList movies={this.state.movies}/>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default ByRating;
