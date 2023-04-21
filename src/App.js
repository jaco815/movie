/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

function Food({name,pic}){
  return(
    <div>
      <h3> I Like {name} </h3>     
      <img  src={pic}/>
    </div>
  ) 
}

const foodLike = [
  {
    id: 0,
    name : '01',
    image : 'http://www.aeriskitchen.com/wp-content/uploads/2023/01/SikBbang_Pizza_01-.jpg',
  },
  {
    id: 1, 
    name: '02',
    image: 'http://www.aeriskitchen.com/wp-content/uploads/2022/11/Potato_Jeon_01-.jpg',
  },
  {
    id: 2,
    name: '03',
    image: 'http://www.aeriskitchen.com/wp-content/uploads/2022/09/Salad_Sandwich_17-.jpg',
  }
] ; 

function renderFood(i){
  return <Food key={i.id} name={i.name} pic={i.image} />
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

export default App;
