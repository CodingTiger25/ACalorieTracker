import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.header`
  color:black;
  background-color: silver;
  display: block;
  padding: 3rem;
  margin: 2rem;
  font-weight: bold;
  font-size: 2rem;
`;


const CalorieButton = styled.button`
    color: orange;
    size: 4rem;

 `;


const Calories = styled.p`
  size: 8rem;
  display: center;


`;

const AddItems = styled.button`
  size: 10rem;
  color: black;

`;

const ListItems = styled.input.attrs(props => ({
  type: "text",

  size: props.size || "15rem",

}))`
  
  color: palevioletred;
  font-size: 1em;
  border: 5px solid palevioletred;
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
      <Title>  
          Track your calories
      </Title>

      <h3>CALORIES</h3>

      <CalorieButton onClick={inputCal}>
        Set calorie goals for the day
      </CalorieButton>
      
      <Calories> {currCalories}
      </Calories>

      <ListItems size= '10rem'>

      </ListItems>
      <button>Enter food</button>
    </div>
  );
}

export default App;
