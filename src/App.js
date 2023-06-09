/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{

  state = {
    isLoading : true ,
    movies:[],
  }

  getMovies = async () => {
    const {
      data:{
        data:{
          movies
        }
      }}
    = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    // Object.assign(this.state.movies,data.data.movies);
    this.setState({movies});
    this.setState({isLoading:false});
    console.log(movies);  
  };

  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false});
    // },5000);
    this.getMovies();
    // axios.get('https://yts.mx/api/v2/list_movies.json')
    // .then(res => { 
    //   this.setState({movies:res.data.data.movies , isLoading:false});
    // })

  }

  render(){

    const {isLoading} = this.state ; 
    const {movies} = this.state;

    return(
      <div>
        { isLoading? 'Loading...': 'we ar ready'}
        <br/>
        {movies.length}
        <br/>        
        {movies.map(movie => {
          return <Movie
            key={movie.id}
            id={movie.id}
            
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster = {movie.medium_cover_image}
            genres={movie.genres}
                      />    
          // return(
          //   <div key={movie.id}>
          //     <h1>{movie.title}</h1>
          //     <h2>{movie.rating}</h2>
          //     <img src={movie.medium_cover_image} alt="movie-poster"/>
          //   </div>
          // )
        })}
      </div>
    ) 
  }
}

export default App;
