import './App.css';
import "firebase/compat/firestore"
import { Firebase } from './firebase/config';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <button onClick={() => {
        Firebase.firestore().collection('products').get().then(data=>{
          data.forEach((obj)=>{
            console.log(obj.data())
          })
        });


      }}>click me</button>

    </div>
  );
}

export default App;
