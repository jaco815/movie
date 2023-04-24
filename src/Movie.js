import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster}){
  return(
    <div className='movie__data'> 
      <img src={poster} alt={title} />
      <h3 className='movie__title'style={{backgroundColor: 'red'}}>{title}</h3>
      <h5 className='movie__year'>{year}</h5>
      <p className='movie__summary'>{summary.slice(0, 180)}...</p>'
      
    </div>
  )
}

Movie.protoType = { 
  // id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;