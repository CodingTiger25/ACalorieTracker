import React, { useEffect, useState } from 'react';
//import {reactLocalStorage} from 'reactjs-localstorage';
import './App.css';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
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

const Background = styled.div`

  background-color: #6868e7;
  height: 100%;
  width: 100%;
  padding: 5px;
`;

const Line = styled.div`
  
  height: 3px;
  width: 100%;
  background: black;
`
function App() {
 
  let [currCalories, setCurrCalories] = useState(0);

  let [breakfastItem, setBreakfastItem] = useState([{ id: '', name:'',calories:0}]);
  let [lunchItem, setLunchItem] = useState([{ id: '', name:'',calories:0}]);
  let [dinnerItem, setDinnerItem] = useState([{ id: '', name:'',calories:0}]);
  let [snackItem, setSnackItem] = useState([{ id: '', name:'',calories:0}]);

  let [foodName, setFoodName] = useState('');
  let [foodCalorie, setFoodCalorie] = useState(0);
  let [usedCalorie, setUsedCalorie] = useState(0);
  let [initCalorie, setInitCalorie] = useState(0);

  const[showForm, setShowForm] = useState(false);
  let [foodTime, setFoodTime] = useState("");

  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [snack, setSnack] = useState(false);


  const inputCal = () => {

    let calories = prompt
                ("Please enter calorie amount: ")

    let cal = 0;

    if(calories)
    {
        cal = parseInt(calories);
        
    }
    localStorage.setItem('InitCalorie',JSON.stringify(cal));
    setCurrCalories(cal);
    setInitCalorie(cal);
}
const changeCategory = (e:String) => {

    if(e.localeCompare("b") === 0)
    {
      setFoodTime("b");
    }
    else if(e.localeCompare("l") === 0)
    {
      setFoodTime("l");
    }
    else if(e.localeCompare("d") === 0)
    {
      setFoodTime("d");
    }
    else if(e.localeCompare("s") === 0)
    {
      setFoodTime("s");
    }
}

  let handleSubmit = (e:any) => {

    e.preventDefault();


    if(currCalories === 0)
    {
      alert('Set calorie limit!');
    }

    else{

          if(foodTime.localeCompare("b") === 0)
          {
            let calo = currCalories - foodCalorie;
            let usedCalo = foodCalorie + usedCalorie;
            setBreakfastItem([{id: uuidv4() , name:foodName,
              calories:foodCalorie},...breakfastItem
            ])
            setCurrCalories(calo);
            setUsedCalorie(usedCalo);
            localStorage.setItem('usedUpCalorie', JSON.stringify(usedCalo)
            )
    
            console.log('used Calorie type: ', typeof(usedCalorie));
            console.log('food Calorie type: ', typeof(foodCalorie));
    
            
            //let calo = currCalories;
          }
          else if(foodTime.localeCompare("l") === 0)
          {
            let calo = currCalories - foodCalorie;
            let usedCalo = foodCalorie + usedCalorie;
            setLunchItem([{id: uuidv4() , name:foodName,
              calories:foodCalorie},...lunchItem
            ])
            setCurrCalories(calo);
            setUsedCalorie(usedCalo);
            localStorage.setItem('usedUpCalorie', JSON.stringify(usedCalo)
            )
    
            console.log('used Calorie type: ', typeof(usedCalorie));
            console.log('food Calorie type: ', typeof(foodCalorie));
            }
            else if(foodTime.localeCompare("d") === 0)
          {
            let calo = currCalories - foodCalorie;
            let usedCalo = foodCalorie + usedCalorie;
            setDinnerItem([{id: uuidv4() , name:foodName,
              calories:foodCalorie},...dinnerItem
            ])
            setCurrCalories(calo);
            setUsedCalorie(usedCalo);
            localStorage.setItem('usedUpCalorie', JSON.stringify(usedCalo)
            )
    
            console.log('used Calorie type: ', typeof(usedCalorie));
            console.log('food Calorie type: ', typeof(foodCalorie));
            }
            else if(foodTime.localeCompare("s") === 0)
          {
            let calo = currCalories - foodCalorie;
            let usedCalo = foodCalorie + usedCalorie;
            setSnackItem([{id: uuidv4() , name:foodName,
              calories:foodCalorie},...snackItem
            ])
            setCurrCalories(calo);
            setUsedCalorie(usedCalo);
            localStorage.setItem('usedUpCalorie', JSON.stringify(usedCalo)
            )
    
            console.log('used Calorie type: ', typeof(usedCalorie));
            console.log('food Calorie type: ', typeof(foodCalorie));
            }
          }
        }
   
  function displayBreakfastItems(List:any) {
      return breakfastItem.map((foods)=> (
    
        <div>
          <h1>{foods.name}  {foods.calories} <button onClick={() => {remove(foods.id,"b")

          }}>Remove</button>
              {/* <button onClick={() => remove(foods.id)}>X</button> */}
          </h1>
        </div>
      ))
  } 

  function displayLunchItems(List:any) {
    return lunchItem.map((lunchFoods)=> (
  
      <div>
        <h1>{lunchFoods.name}  {lunchFoods.calories} <button onClick={() => {remove(lunchFoods.id,"l")

}}>Remove</button>
            {/* <button onClick={() => remove(foods.id)}>X</button> */}
        </h1>
      </div>
    ))
} 

function displayDinnerItems(List:any) {
  return dinnerItem.map((dinnerFoods)=> (

    <div>
      <h1>{dinnerFoods.name}  {dinnerFoods.calories} <button onClick={() => {remove(dinnerFoods.id,"d")

}}>Remove</button>
          {/* <button onClick={() => remove(foods.id)}>X</button> */}
      </h1>
    </div>
  ))
} 

function displaySnackItems(List:any) {
  return snackItem.map((snackFoods)=> (

    <div>
      <h1>{snackFoods.name}  {snackFoods.calories} <button onClick={() => {remove(snackFoods.id,"s")

}}>Remove</button>
          {/* <button onClick={() => remove(foods.id)}>X</button> */}
      </h1>
    </div>
  ))
} 

  
  const remove = (e:string,r:string) => {

    if(r.localeCompare("b") === 0)
    {
      const newList = breakfastItem.filter(foodL => foodL.id != e);
      setBreakfastItem(newList);
      window.location.reload();
      console.log('Removed from list ', breakfastItem);
    }
    else if(r.localeCompare("l") === 0)
    {
      const newList = lunchItem.filter(foodL => foodL.id != e);
      setLunchItem(newList);
      window.location.reload();
      console.log('Removed from list ', lunchItem);
    }
    else if(r.localeCompare("d") === 0)
    {
      const newList = dinnerItem.filter(foodL => foodL.id != e);
      setDinnerItem(newList);
      window.location.reload();
      console.log('Removed from list ', dinnerItem);
    }
   else if(r.localeCompare("s") === 0)
    {
      const newList = snackItem.filter(foodL => foodL.id != e);
      setSnackItem(newList);
      window.location.reload();
      console.log('Removed from list ', snackItem);
    }
      
  }

   const empty = (e:string) => {

    if(e.localeCompare("b") === 0)
    {
      setBreakfastItem([{id:'', name:"",calories:0}])
    }
    else if(e.localeCompare("l") === 0)
    {
      setLunchItem([{id:'', name:"",calories:0}])
    }
    else if(e.localeCompare("d") === 0)
    {
      setLunchItem([{id:'', name:"",calories:0}])
    }
    else if(e.localeCompare("s") === 0)
    {
      setLunchItem([{id:'', name:"",calories:0}])
    }
     console.log(breakfastItem);
   }

  // const show =(e:any) => {
  //   e.preventDefault();
  //   console.log(foodItem)
  // }

  const displayForm = (e:String) => {
    if(e.localeCompare("b") === 0)
    {
      setBreakfast(!breakfast);
      setShowForm(!showForm);
      setLunch(false);
    }
    else if(e.localeCompare("l") === 0)
    {
      setLunch(true);
      setShowForm(!showForm);
      setBreakfast(false);
    }
    else if(e.localeCompare("d") === 0)
    {
      setDinner(!dinner);
      setShowForm(!showForm);
      setBreakfast(false);
      setLunch(false);
    }
    else if(e.localeCompare("s") === 0)
    {
      setSnack(!snack);
      setShowForm(!showForm);
      setBreakfast(false);
      setLunch(false);
      setDinner(false);
    }
    
  }

useEffect(() => {
  //Calories left 
  const data = JSON.parse(
    localStorage.getItem('calories') || '0');
    //Food list
  let breakfastData = JSON.parse(
    localStorage.getItem('foodlist') || '{}')

  let lunchData = JSON.parse(
    localStorage.getItem('lunchlist') || '{}')

  let dinnerData = JSON.parse(
    localStorage.getItem('dinnerlist') || '{}')

  let snackData = JSON.parse(
    localStorage.getItem('snacklist') || '{}')
    //Initial calorie input 
  let initCalo = JSON.parse(
    localStorage.getItem('InitCalorie') || '0'
  )

  //Total amount of calories used
  let totalCalories = JSON.parse(localStorage.getItem('usedUpCalorie') || '0');


  setCurrCalories(data);

  setBreakfastItem(breakfastData);
  setLunchItem(lunchData);
  setDinnerItem(dinnerData);
  setSnackItem(snackData);


  setInitCalorie(initCalo);
  setUsedCalorie(totalCalories);
  localStorage.clear();
  // console.log('this is' , foodData);
  // console.log('data',data);
},[])

useEffect(()=> {
  //setCurrCalories(Number(localStorage.getItem('calories')));

  localStorage.setItem('calories',
                   JSON.stringify(currCalories));

  },[currCalories])

useEffect(() => {
  localStorage.setItem('foodlist', JSON.stringify(breakfastItem));
},[breakfastItem])

useEffect(() => {
  localStorage.setItem('lunchlist', JSON.stringify(lunchItem));
},[lunchItem])

useEffect(() => {
  localStorage.setItem('dinnerlist', JSON.stringify(dinnerItem));
},[dinnerItem])

useEffect(() => {
  localStorage.setItem('snacklist', JSON.stringify(snackItem));
},[snackItem])

  return (
    <Background>
      <Title>  
          Track your calories
      </Title>
      
      <CalorieButton onClick={inputCal}>
        Set calorie goals for the day
      </CalorieButton>
      <h3>CALORIES REMAINING</h3>


      <Calories>
        {initCalorie} - {usedCalorie} = {currCalories}
      </Calories>
      

      
      {/* <form onSubmit={handleSubmit}>
      <label>Food item:
      <input type="text" name ="foodName" defaultValue={''} 
        onChange={(e:any) => 
              setFoodName(e.target.value)}></input>
      </label>
      <label>Calories:
      <input type="text" name = "foodCalorie" 
      defaultValue={0}
      onChange={(e:any) => setFoodCalorie(parseInt(
      e.target.value))}></input>
      </label>
      <button type="submit">Enter food</button>
      </form> */}

      {/* <button onClick={empty}>Clean list</button>
      <button onClick={show}>Show list</button> */}
      
        <h1>
          Breakfast
        </h1>
        {displayBreakfastItems(breakfastItem)}
        <button onClick={() => displayForm("b")}>ADD ITEM</button>
        <button onClick={() => {empty("b")}}>CLEAR</button>
        {showForm && breakfast && (
          <form onSubmit={(e) => handleSubmit(e)}>
          <label>Food item:
          <input type="text" name ="foodName" defaultValue={''} 
            onChange={(e:any) => 
                  setFoodName(e.target.value)}></input>
          </label>
          <label>Calories:
          <input type="text" name = "foodCalorie" 
          //defaultValue={0}
          onChange={(e:any) => setFoodCalorie(parseInt(
          e.target.value))}></input>
          </label>
          <button type="submit" onClick={() => 
            {changeCategory("b")}}>Enter food</button>
          </form>

      )}
        <Line></Line>
        <div>
        <h1>
          Lunch
        </h1>
        {displayLunchItems(lunchItem)}
        <button onClick={() => displayForm("l")}>ADD ITEM</button>
        <button onClick={() => {empty("l")}}>CLEAR</button>

        {showForm && lunch && (
          <form onSubmit={(e) => handleSubmit(e)}>
          <label>Food item:
          <input type="text" name ="foodName" //defaultValue={''} 
            onChange={(e:any) => 
                  setFoodName(e.target.value)}></input>
          </label>
          <label>Calories:
          <input type="text" name = "foodCalorie" 
          defaultValue={0}
          onChange={(e:any) => setFoodCalorie(parseInt(
          e.target.value))}></input>
          </label>
          <button type="submit" onClick={() => {changeCategory("l")}}>Enter food</button>
          </form>)}
          </div>
        
        <Line></Line>
        <div>

        
        <h1>
          Dinner
        </h1>
        {displayDinnerItems(dinnerItem)}
        <button onClick={() => {displayForm("d")}}>ADD ITEM</button>
        <button onClick={() => {empty("d")}}>CLEAR</button>
        {showForm && dinner && (
          <form onSubmit={(e) => handleSubmit(e)}>
          <label>Food item:
          <input type="text" name ="foodName" defaultValue={''} 
            onChange={(e:any) => 
                  setFoodName(e.target.value)}></input>
          </label>
          <label>Calories:
          <input type="text" name = "foodCalorie" 
          defaultValue={0}
          onChange={(e:any) => setFoodCalorie(parseInt(
          e.target.value))}></input>
          </label>
          <button type="submit" onClick={() => {changeCategory("d")}}>Enter food</button>
          </form>)}
        <Line></Line>
        </div>
        <p>
          
        <h1>
          Snack
        </h1>
        {displaySnackItems(snackItem)}
        <button onClick={() => {displayForm("s")}}>ADD ITEM</button>
        <button onClick={() => {empty("s")}}>CLEAR</button>
        {showForm && snack && (
          <form onSubmit={(e) => handleSubmit(e)}>
          <label>Food item:
          <input type="text" name ="foodName" defaultValue={''} 
            onChange={(e:any) => 
                  setFoodName(e.target.value)}></input>
          </label>
          <label>Calories:
          <input type="text" name = "foodCalorie" 
          defaultValue={0}
          onChange={(e:any) => setFoodCalorie(parseInt(
          e.target.value))}></input>
          </label>
          <button type="submit" onClick={() => {changeCategory("s")}}>Enter food</button>
          </form>)}
        <Line></Line>

        
        
        </p>
      
      
    </Background>
  );
}

export default App;
