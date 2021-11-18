import React, {useState} from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [images, setImages] = useState([
    { url:'https://source.unsplash.com/random/1'},
    { url:'https://source.unsplash.com/random/2'},
    { url:'https://source.unsplash.com/random/3'},
    { url:'https://source.unsplash.com/random/4'},
    { url:'https://source.unsplash.com/random/5'},
    { url:'https://source.unsplash.com/random/6'},
  ])

const handleAdd = () =>{
setImages([...images,{
  url:`https://source.unsplash.com/random/${Math.floor(Math.random()*100)}`
}])
}

const handleRemove=()=>{
  setImages(images.slice(0,-1))
}

  return (
    <div className="App">
    <div className="cardContainer">
    <Card images ={images}/>
    </div>
    <div className="buttonContainer">
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
   
    </div>
    
  );
}

export default App;
