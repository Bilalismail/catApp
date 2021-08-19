import React, { useState, useEffect } from 'react'; //import react library 
//react hooks are functions thatallow you to hook into the react state and also into the react cycle
import Header from './components/Header';
import './App.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


  

const apiKey = '273db221-969c-4e89-9549-498ce6999f89';
const url ='https://api.thecatapi.com/v1/breeds';

function App(){ //define a function 
  
  const [catUrl, setCatUrl] = useState('');
  const [catInfo, setinfoUrl] = useState('');
  const [catName, setName ]= useState('');
  const [catTemp, setTemp]= useState('');
  const [affection_level_value, setaffection_level_value] = useState(0);
  const [child_friendly, setchild_friendly] = useState(0);
  const [dog_friendly, setdog_friendly] = useState(0);
  const [cat_intelligence, set_intelligence] = useState(0);


  useEffect(() => {
    
    getPic();
  }, [])
  const getPic = () => {
    
  
    const rand = Math.floor(Math.random() * 67);
    fetch(url, { 
       headers: {
         'x-api-key': apiKey}}
      )
    .then((res) => res.json())
    .then((cats) => {
      console.log('Cats: ', cats);
      const newCat = cats[rand].image.url;
      const newInfo = cats[rand].description;
      const name = cats[rand].name;
      const temp = cats[rand].temperament;
      const affection  = cats[rand].affection_level;
      const childFriendly  = cats[rand].child_friendly;
      const dogFriendly  = cats[rand].dog_friendly;
      const catIntel  = cats[rand].intelligence;
      

      setCatUrl(newCat);
      setinfoUrl(newInfo);
      setName(name);
      setTemp(temp);
      setaffection_level_value(affection);
      setchild_friendly(childFriendly);
      setdog_friendly(dogFriendly);
      set_intelligence(catIntel);
    })
    .catch((error) => {
      console.log('error', error);
  });

  
}


return(
  <div>
    <Header />
      <div className='image'>
        <img src={catUrl} height="200" width="200" border="1px"></img>
        <h1>{catName}</h1>
        <button className = 'btn'onClick ={getPic}>Click for new cat</button>
      </div>
      <h2> Cat Fact </h2>
      <div className='text'>
          <p> {catInfo} </p>
      </div>
      <h2> Temperament </h2>
      <div className='text'>
          <p> {catTemp} </p>
      </div>
      <table>
      <tbody>
      <tr>
      <td>
       <h2>Affection Level </h2>
      
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="disabled" value={affection_level_value} disabled />
      </Box>
     </td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
      <td>      
        
      <h2>Child Friendly</h2>

    <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend"></Typography>
    <Rating name="disabled" value={child_friendly} disabled />
    </Box>
      </td>
      </tr>
      </tbody>
      </table>
      <table>
      <tbody>
      <tr>
      <td>
       <h2>Dog Friendly</h2>
      
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="disabled" value={dog_friendly} disabled />
      </Box>
     </td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
     <td>&nbsp;</td><td>&nbsp;</td>
      <td>      
        
      <h2>intelligence</h2>

    <Box component="fieldset" mb={3} borderColor="transparent">
    <Typography component="legend"></Typography>
    <Rating name="disabled" value={cat_intelligence} disabled />
    </Box>
      </td>
      </tr>
      </tbody>
      </table>

      </div>
      

      
   
  
  //returned html inside a function
);
}

export default App; // exports the app

