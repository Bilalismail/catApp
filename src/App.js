import React, { useState, useEffect } from 'react'; //import react library 
//react hooks are functions thatallow you to hook into the react state and also into the react cycle
import './App.css';
const apiKey = '273db221-969c-4e89-9549-498ce6999f89';
const url ='https://api.thecatapi.com/v1/images/search';

function App(){ //define a function 
  const [catUrl, setCatUrl] = useState('');
  useEffect(() => {
    
    getPic();
  }, [])
  const getPic = () => {
    
  

    fetch(url, //{ 
      // headers: {
      //   'x-api-key': apiKey}}
      )
    .then((res) => res.json())
    .then((cats) => {
      console.log('Cats: ', cats);
      const newCat = cats[0].url;

      setCatUrl(newCat);
    })
    .catch((error) => {
      console.log('error', error);
  });
}


return(
  <div className="app">
    <h1> Bilal's Cat App</h1>
    <img src={catUrl}></img>
    <button onClick ={getPic}>Click for new image</button>
  </div>
  //returned html inside a function
);
}

export default App; // exports the app