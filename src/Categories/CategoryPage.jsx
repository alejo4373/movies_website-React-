// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
import moviesAPI from "../Movies/moviesAPI"
import Select from "./Select_comp"
import MovieList from "../Movies/MovieList"

const cardStyle = {
  width: '409px'
}

class Category extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      categorySelected: '',
      movies: []
    }
  }
  
  componentWillMount = () => {
    this.categories = moviesAPI.getCategories() 
  }
  
  handleSelectChange = e => {
    const category = e.target.value
    this.setState({
      categorySelected: category,
      movies: moviesAPI.getByCategory(category)
    })
  }
  
  render() {
    console.log(this.state)
    console.log('CATEGORIES ===>', this.sCat)
    return (
      <div style={cardStyle} className='ui container center aligned segment'>
        <h2>Categories</h2>
        <Select name='catergories' values={this.categories} handler={this.handleSelectChange}/>
        <MovieList movies={this.state.movies}/>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Category;
