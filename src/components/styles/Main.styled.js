
import styled from 'styled-components';

export const Main = styled.div`
    background-color: antiquewhite;
    width: 1000px;
    height: 100%;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`

export const FoodBlock = styled.div`
    background: gray;
    margin: 3em;
    width: 100%;
    height: 100%;
    border: 0.3em solid black;
    box-sizing: border-box;
`

//Beginning of styled components
export const Title = styled.section`
  color:black;
  display: flex;
  margin: auto;
  right: 6%;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const TitleColor = styled.div`
    background-color: lightskyblue;
    display: flex;
    padding:1px;
    width: auto;
    text-align: center;
`;

export const CalorieButton = styled.button`
    color: black;
    display: block;
    margin: auto;
    size: 6rem;
    height: 4rem;
    width: 5rem;
 `;

export const CalorieButtonText = styled.text`
  color: black;
  text-align: center;
  size: 40px;
  padding: 3px;
`

export const Calories = styled.p`
  font-size: 5rem;
  color: black;
  text-align: center;
`;

export const AddItems = styled.button`
  size: 10rem;
  color: black;
`;

export const Background = styled.div`
  background-color: #6868e7;
  height: 100%;
  width: 100%;
  padding: 5px;
`;

export const Line = styled.div`
  height: 3px;
  width: 100%;
  background: black;
`

//End of styled components 