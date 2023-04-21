/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types'; 

function Food({name,picture,rating}){
  return(
    <div>
      <h3> I Like {name} </h3>    
      <h4>{rating}/5.0</h4> 
      <img  src={picture} alt={name}/>
    </div>
  ) 
}

const foodLike = [
  {
    id: 0,
    name : '01',
    image : 'http://www.aeriskitchen.com/wp-content/uploads/2023/01/SikBbang_Pizza_01-.jpg',
    rating: 4.5,
  },
  {
    id: 1, 
    name: '02',
    image: 'http://www.aeriskitchen.com/wp-content/uploads/2022/11/Potato_Jeon_01-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '03',
    image: 'http://www.aeriskitchen.com/wp-content/uploads/2022/09/Salad_Sandwich_17-.jpg',
    rating: 3.5,
  }
] ; 

function renderFood(i){
  return <Food key={i.id} name={i.name} picture={i.image} rating={i.rating} />
}

function App() {
  console.log(foodLike.map(renderFood))
  return (
    <div className="App">
      {/* { foodLike.map((n,i) =>(<Food name={i.name} pic={i.image}/>))} */}
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.prototype={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number,
}

export default App;
