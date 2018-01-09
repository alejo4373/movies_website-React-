const movies = [
  { 
    id: "001", 
    title: "Edward Scissorhands", 
    year: "1990",
    categories: ['Drama', 'Fantasy', 'Romance'], 
    director: "Tim Burton",
    stars:['Johnny Depp', 'Winona Ryder', 'Dianne Wies'],
    moviePoster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDUxN2I5NDUtZjdlMC00NjlmLTg0OTQtNjk0NjAxZjFmZTUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink:'http://www.imdb.com/title/tt0099487/'
  },
   { 
    id: "002", 
    title: "Perfume: The Story of a Murderer", 
    year: "2006",
    categories: ['Drama', 'Crime', 'Fantasy'], 
    director: "Tom Tykwer",
    stars:['Ben Whishaw', 'Dustin Hoffman', 'Alan Rickman'],
    moviePoster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NjUyMTk3Nl5BMl5BanBnXkFtZTcwOTA5MzkzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink:'http://www.imdb.com/title/tt0396171/'
    
  },
   { 
    id: "003", 
    title: "The Best Offer", 
    year: "2013",
    categories: ['Drama', 'Crime', 'Mistery'], 
    director: "Giuseppe Tornatore",
    stars:['Geoffrey Rush', 'Jim Sturgess', 'Sylvia Hoeks'],
    moviePoster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQ3NjA0N15BMl5BanBnXkFtZTgwODQyNjQ4MDE@._V1_UX182_CR0,0,182,268_AL_.jpg', 
    imdbLink:'http://www.imdb.com/title/tt1924396/'
  },
   { 
    id: "004", 
    title: "The Colors of the Mountain", 
    year: "2010",
    categories: ['Drama'], 
    director: "Carlos César Arbeláez",
    stars:[' Hernán Mauricio Ocampo', 'Nolberto Sánchez', 'Genaro Aristizábal'],
    moviePoster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDQxNDEzOF5BMl5BanBnXkFtZTgwMzIxMDg0MDE@._V1_UY268_CR4,0,182,268_AL_.jpg', 
    imdbLink:'http://www.imdb.com/title/tt1715853'
  },
   { 
    id: "005", 
    title: "Les Misérables", 
    year: "2012",
    categories: ['Drama', 'History', 'Musical'], 
    director: "Tom Hooper",
    stars:['Hugh Jackman', 'Russell Crowe', 'Anne Hathaway'],
    moviePoster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg', 
    imdbLink:'http://www.imdb.com/title/tt1707386'
  }
];

const getAll = () => movies;
const getOne = id => movies.find(movie => movie.id === id);
const getCategories = () => movies.map(movie => movie.categories) //Get an arr of arrays 
                            .reduce((newList, currentList ) => [...newList, ...currentList]) //flatten it
                            .filter((category, index, newList) => newList.indexOf(category) === index) //only if the current category is not already there

const getByCategory = category => movies.filter(movie => movie.categories.includes(category));

export default {
  getOne,
  getAll,
  getCategories,
  getByCategory,
};
