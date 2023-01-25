import React, { useState } from 'react';
import './App.css';


function App() {
  
  const [currCalories, setCurCalories] = useState(0);


  const inputCal = () => {

    let calories = prompt
                ("Please enter calorie amount: ")

    let cal = 0;

    if(calories)
    {
        cal = parseInt(calories);
        
    }

    setCurCalories(cal);
}


  return (
    <div className="App">
      <header>  
          Track your calories
      </header>

      <h3>CALORIES</h3>

      <button onClick={inputCal} >Set calorie goals for the day</button>
      <p> {currCalories}</p>
    </div>
  );
}

export default App;
