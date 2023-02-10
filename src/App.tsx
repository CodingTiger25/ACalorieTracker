import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Title = styled.section`
  color:black;
  display: block;
  position: relative;
  left: 15%;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const TitleColor = 

styled.section`
  color:black;
  background-color: silver;
  display: block;
  position: relative;
  left: 15%;
  font-weight: bold;
  font-size: 2rem;
`;

const CalorieButton = styled.button`
    color: orange;
    size: 4rem;
    position: center;

 `;


const Calories = styled.p`
  font-size: 5rem;
  color: black;
  text-align: center;
`;

const AddItems = styled.button`
  size: 10rem;
  color: black;

`;

const ListItems = 
styled.input.attrs(props => ({
  type: "text",

  size: props.size || "15rem",

}))`
  
  color: palevioletred;
  font-size: 1em;
  border: 5px solid palevioletred;
`;

const Background = styled.div`

  background-color: #6868e7;
  height: 100vh;
  width: 100vw;
`;

function App() {
 
  let [currCalories, setCurrCalories] = useState(0);

  const [foodItem, setFoodItem] = useState({name:"",calories:0});
  const [foodCalorie, setFoodCalorie] = useState([]);

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

/*const inputFood = (event) => {

    setFoodItem({...foodItem,
      [event.target.name]: event.target.value});
  
};*/

const handleSubmit = (e: any) => {
  e.preventDefault();
 
  //setFoodItem({name:"", calories:""}); 
  //setFoodItem(parseInt(foodItem.calories))
  setCurrCalories( currCalories - foodItem.calories);
  console.log(foodItem);
};

  const empty = (e:any) => {
    e.preventDefault();
    setFoodItem({name:"",calories:0});
    console.log(foodItem);
  }

  const show =(e:any) => {
    e.preventDefault();
    console.log(foodItem)
  }


  return (
    <Background>
      <Title>  
          Track your calories
      </Title>

      <h3>CALORIES</h3>

      <CalorieButton onClick={inputCal}>
        Set calorie goals for the day
      </CalorieButton>
      
      <Calories> {currCalories}
      </Calories>

      <form onSubmit={handleSubmit}>
      <label>Food item:
      <input type="text" name ="name" value={foodItem.name} 
        onChange={(e:any) => 
              setFoodItem({...foodItem,name: e.target.value})}></input>
      </label>
      <label>Calories:
      <input type="text" name = "calories" 
      value={foodItem.calories}
      onChange={(e:any) => setFoodItem({...foodItem,
      calories: Number(e.target.value)})}></input>
      </label>
      <button type="submit">Enter food</button>
      </form>

      <button onClick={empty}>Clean list</button>
      <button onClick={show}>Show list</button>
      
    </Background>
  );
}

export default App;
