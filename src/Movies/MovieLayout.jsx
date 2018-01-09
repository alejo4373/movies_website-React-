import React from "react";
import Rater from "./Rater"

const cardStyle = {
  width: '409px'
}

const MovieLayout = (props) => {
 const  { 
    id,
    title, 
    year,
    categories,
    director,
    stars,
    moviePoster,
    imdbLink
  } = props.movie
  
 const handleRatingClick = e => {
   const movieId = id; 
   const rating = e.target.dataset.rating;
 //console.log(rating, '==>', movieId)
   props.rateMovieHandler(movieId, rating)
 }
 
 const getRating = (id) => {
   return props.ratings[id] ? props.ratings[id] : 0
 } 

 return (
  <div style={cardStyle} className='ui container center aligned segment'>
    <h1>{title} ({year})</h1>
    <div className='frame'>
      <img className='poster' src={moviePoster} alt={"Poster for the movie " + title}/>
    </div>

    <h3>Categories: {categories.join(', ')} </h3>
    <h3>Director: {director} </h3>
    <h3>Stars: {stars.join(', ')} </h3>
    <a href={imdbLink}>
      <img className='imglink' src='https://vignette.wikia.nocookie.net/the-leftovers/images/7/7f/IMDB-icon.png/revision/latest?cb=20140627045053'
           alt='imdb movie link'/>
    </a>
   <Rater handleClick={handleRatingClick}
          currentRating={getRating(id)} 
   />
 </div>
);
}

export default MovieLayout;
