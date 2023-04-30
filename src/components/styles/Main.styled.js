
import styled from 'styled-components';

export const Main = styled.div`
    background-color: antiquewhite;
    boxSizing: border-box;
    height: auto;
    max-width: 100%;

    @media (max-width: 1300px){
      background: green;
      width:auto;
    }
`

export const FoodBlock = styled.div`
    background: white;
    margin: 3em;
    width: 40%;
    height: 30%;
    border: 0.3em solid black;
    box-sizing: border-box;

    @media (max-width: 1300px){
      background: white;
      height: 55%;
      width: 45%
      
    }
`

export const CalorieBlock = styled.div`
    border: 0.3em solid black;
    background: white;
    position: relative;
    height: 8.7em;
    width: calc(42vw - 12px);
    left: 45em;
    margin: 0em 0em 0em 0em;

    @media (min-width: 2400px) and (max-width: 2480px){
      background: white;
      position: relative;
      left: 41em;
    }

    @media (max-width: 1300px){
      background: white;
      position: relative;
      left: 13em;
      width: 67%;
      margin: 1em 0em 0em 0em;
    }

    @media (min-width:1301px) and (max-width: 1801px){
      background: white;
      position: relative;
      left: 13em;
      width: 67%;
      margin: 1em 0em 0em 0em;
    }
`

export const CalorieBudget = styled.p`
    font-size: 25px;
    position: relative;
    right: 19em;
    bottom: 3em;
    margin: 0% 0% 0% 0;

    @media (min-width: 2400px) and (max-width: 2480px){
      position: relative;
      left: -19em;
    }
  
    @media (min-width: 2374px) and (max-width: 2399px){
      position: relative;
      left: -18em;
    }
  
    @media (min-width: 2340px) and (max-width: 2373px){
      position: relative;
      left: -17em;
    }
  
    @media (min-width: 2218px) and (max-width: 2339px){
      position: relative;
      left: -17em;
    }
  
    @media (min-width: 2120px) and (max-width: 2217px){
      position: relative;
      left: -16em;
    }
  
    @media (min-width: 2005px) and (max-width: 2120px){
      position: relative;
      left: -16em;
    }
  
    @media (min-width: 1875px) and (max-width: 2004px){
      position: relative;
      left: -15em;
    }
  
    @media (min-width: 1780px) and (max-width: 1874px){
      position: relative;
      left: -13.5em;
    }
  
    @media (min-width: 1301px) and (max-width: 1779px){
      position: relative;
      left: -16em;
    }

    @media (max-width: 1300px){
      position: relative;
      left: -14.5em;
    }
`

export const CalorieBudgetNum = styled.p`
    fontSize: 20px;
    position: relative;
    right: 6em;
    bottom: 2.3em;

    @media (min-width: 2400px) and (max-width: 2480px){
      position: relative;
      left: -6em;
    }
  
    @media (min-width: 2374px) and (max-width: 2399px){
      position: relative;
      left: -5.6em;
    }
  
    @media (min-width: 2340px) and (max-width: 2373px){
      position: relative;
      left: -5.4em;
    }
  
    @media (min-width: 2218px) and (max-width: 2339px){
      position: relative;
      left: -5.3em;
    }
  
    @media (min-width: 2120px) and (max-width: 2217px){
      position: relative;
      left: -5em;
    }
  
    @media (min-width: 2005px) and (max-width: 2120px){
      position: relative;
      left: -4.9em;
    }
  
    @media (min-width: 1875px) and (max-width: 2004px){
      position: relative;
      left: -4.6em;
    }
  
    @media (min-width: 1780px) and (max-width: 1874px){
      position: relative;
      left: -4.3em;
    }
  
    @media (min-width: 1301px) and (max-width: 1779px){
      position: relative;
      left: -5em;
    }

    @media (max-width: 1300px){
      position: relative;
      left: -4.6em;
    }
    
`
export const MinusButton = styled.p`
    position: relative;
    left: -3em;
    bottom: 4.6em;

    @media (max-width: 1300px){
      position: relative;
      left: -3em;
    }
`;

export const CalorieUsedNum = styled.p`
    fontSize: 20px;
    position: relative;
    left: 0.2em;
    bottom: 6.6em;

    @media (min-width: 2400px) and (max-width: 2480px){
      position: relative;
      left: 0em;
    }
  
    @media (min-width: 2374px) and (max-width: 2399px){
      position: relative;
      left: 0em;
    }
  
    @media (min-width: 2340px) and (max-width: 2373px){
      position: relative;
      left: -0.6em;
    }
  
    @media (min-width: 2218px) and (max-width: 2339px){
      position: relative;
      left: 0em;
    }
  
    @media (min-width: 2120px) and (max-width: 2217px){
      position: relative;
      left: 0em;
    }
  
    @media (min-width: 2005px) and (max-width: 2120px){
      position: relative;
      left: -1em;
    }
  
    @media (min-width: 1875px) and (max-width: 2004px){
      position: relative;
      left: -1em;
    }
  
    @media (min-width: 1780px) and (max-width: 1874px){
      position: relative;
      left: -1.1em;
    }
  
    @media (min-width: 1301px) and (max-width: 1779px){
      position: relative;
      left: -.6em;
      top: -6.7em;
    }

    @media (max-width: 1300px){
      position: relative;
      left: -0.5em;
    }
`

export const CalorieLeft = styled.p`
    font-size: 25px;
    position: relative;
    left: 18em;
    right: -18em;
    bottom: 4.1em;
    margin: 0% 0% 0% 0;

    @media (min-width: 2400px) and (max-width: 2480px){
      position: relative;
      left: 17em;
    }

    @media (min-width: 2374px) and (max-width: 2399px){
      position: relative;
      left: 17em;
    }

    @media (min-width: 2340px) and (max-width: 2373px){
      position: relative;
      left: 16.7em;
    }

    @media (min-width: 2218px) and (max-width: 2339px){
      position: relative;
      left: 15.7em;
    }

    @media (min-width: 2120px) and (max-width: 2217px){
      position: relative;
      left: 14.7em;
    }

    @media (min-width: 2005px) and (max-width: 2120px){
      position: relative;
      left: 13.7em;
    }

    @media (min-width: 1875px) and (max-width: 2004px){
      position: relative;
      left: 12.7em;
    }

    @media (min-width: 1780px) and (max-width: 1874px){
      position: relative;
      left: 9.9em;
    }

    @media (min-width: 1301px) and (max-width: 1779px){
      position: relative;
      left: 12em;
    }

    @media (max-width: 1300px){
      position: relative;
      left: 13em;
    }
`
export const EqualsButton = styled.p`
    position: relative;
    left: 3.5em;
    bottom: 8.8em;

    @media (min-width: 2400px) and (max-width: 2480px){
      position: relative;
      left: 2.2em;
    }
  
    @media (min-width: 2374px) and (max-width: 2399px){
      position: relative;
      left: 3em;
    }
  
    @media (min-width: 2340px) and (max-width: 2373px){
      position: relative;
      left: 3em;
    }
  
    @media (min-width: 2218px) and (max-width: 2339px){
      position: relative;
      left: 3em;
    }
  
    @media (min-width: 2120px) and (max-width: 2217px){
      position: relative;
      left: 2em;
    }
  
    @media (min-width: 2005px) and (max-width: 2120px){
      position: relative;
      left: 1em;
    }
  
    @media (min-width: 1875px) and (max-width: 2004px){
      position: relative;
      left: 1em;
    }
  
    @media (min-width: 1780px) and (max-width: 1874px){
      position: relative;
      left: 1em;
    }
  
    @media (min-width: 1301px) and (max-width: 1779px){
      position: relative;
      left: 1.8em;
    }

    @media (max-width: 1300px){
      position: relative;
      left: 2em;
    }
`;

export const CaloriesLeftUsed = styled.p`
  fontSize: 20px;
  position: relative;
  left: 5.5em;
  bottom: 10.956em;

  @media (min-width: 2400px) and (max-width: 2480px){
    position: relative;
    left: 5em;
  }

  @media (min-width: 2374px) and (max-width: 2399px){
    position: relative;
    left: 5.5em;
  }

  @media (min-width: 2340px) and (max-width: 2373px){
    position: relative;
    left: 5em;
  }

  @media (min-width: 2218px) and (max-width: 2339px){
    position: relative;
    left: 5em;
  }

  @media (min-width: 2120px) and (max-width: 2217px){
    position: relative;
    left: 5em;
  }

  @media (min-width: 2005px) and (max-width: 2120px){
    position: relative;
    left: 4.5em;
  }

  @media (min-width: 1875px) and (max-width: 2004px){
    position: relative;
    left: 4em;
  }

  @media (min-width: 1780px) and (max-width: 1874px){
    position: relative;
    left: 3em;
  }

  @media (min-width: 1301px) and (max-width: 1779px){
    position: relative;
    left: 3.8em;
  }

  @media (max-width: 1300px){
    position: relative;
    left: 13em;
  }
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

