import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import './index.css'

//Other pages
import Home from "./Home";
import Movies from "./Movies/Movies";
import Categories from "./Categories/CategoryPage"
import ByRatings from "./byRating/ByRating_page"


const nav = {
   margin: '1em 247px'
}

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          //{moviId: rating}
          //{ '005': '1',
          //  '002': '5'}
      }
  }

  rateMovie = (movieId, rating) => {
    this.setState({
      [movieId]: rating
    })
  } 

  renderMovies = () => {
    return <Movies rateMovie={this.rateMovie} ratings={this.state}/> 
  }

  renderByRating = () => {
    return <ByRatings ratings={this.state}/> 
  }

  render() {
    console.log(this.state)
    return (
      <div className='ui center aligned container segment'>

        <nav style={nav} className='ui menu'>
          <div className='link item'>
            <Link to="/">
              <span className='fas fa-home'/>{' '} 
                Home
            </Link>
          </div>
          <div className='link item'>
            <Link to="/movies">
              <span className='fas fa-film' />{' '}
              Movies</Link>
          </div>
          <div className='link item'>
            <Link to="/categories">
              <span className='fas fa-sort-amount-down'/>{' '}
              Categories</Link>
          </div>
           <div className='link item'>
            <Link to="/byrating">
              <span className='fas fa-thumbs-up'/>{' '}
              By Rating</Link>
          </div>
        </nav>
        <div>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/movies" render={this.renderMovies} />
         {/*<Route path="/movies" component={<Movies handler={this.renderMovies} />} /> this didn't work */} 
            <Route path="/categories" component={Categories} />
            <Route path="/byrating" render={this.renderByRating} />
            
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
