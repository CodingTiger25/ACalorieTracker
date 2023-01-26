import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const CalorieButton = styled.button`
    color: orange;
    size: 4rem;
    `;

function App() {
 
  const [currCalories, setCurrCalories] = useState(0);

  


  const inputCal = () => {

    let calories = prompt
                ("Please enter calorie amount: ")

    let cal = 0;

    if(calories)
    {
        cal = parseInt(calories);
        
    }

    setCurrCalories(cal);
}


  return (
    <div className="App">
      <header>  
          Track your calories
      </header>

      <h3>CALORIES</h3>

      <CalorieButton onClick={inputCal}>
        Set calorie goals for the day
      </CalorieButton>
      
      <p> {currCalories}</p>
    </div>
  );
}

export default App;
