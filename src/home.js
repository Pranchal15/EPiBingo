import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Congrats from "./congrats";
// import shuffle from "shuffle-array";

import "./styles.css";

import { start } from "./Confetti";

function Confetti() {
  useEffect(() => {
    start();
  });
  return <canvas id="canvas" />;
}

function Tile({ id, children, onToggle, isSet }) {
  return (
    <div onClick={onToggle} className={`tile ${isSet ? "tile--set" : ""}`}>
      {children}
    </div>
  );
}

const tilesData = [
  "Python",
  "NLP",
  "Computer Vision",
  "Tensor Flow",
  "Data",
  "Kaggle",
  "Pandas",
  "NumPy",
  "META",
  "Instagram",
  "Neural Networks",
  "Artificial Intelligence",
  "",
  "Image Processing",
  "Data Science",
  "Big Data",
  "SQL",
  "Data Analysis",
  "Internet of Things",
  "Balayya Babu",
  "sci-kit learn",
  "Django",
  "Cloud",
  "Blockchain",
  "Crypto Currency",


];

const data = (tilesData).reduce(
  (data, value, index) => ({ ...data, [index]: value }),
  {}
);

export default function Home() {
  const [state, setState] = useState({ checked: {} });
  const [count,setcount] = useState(0);
  const isWon = checked => {
    if (count > 5)
    {
        return true;
    }
    else {
        return false;
    }
    // const range = [0, 1, 2, 3, 4];
    // return (
    //   undefined !==
    //     range.find(row => range.every(column => checked[row * 5 + column])) ||
    //   undefined !==
    //     range.find(column => range.every(row => checked[row * 5 + column])) ||
    //   range.every(index => checked[index * 5 + index]) ||
    //   range.every(index => checked[index * 5 + 4 - index])
    // );
  };
  const toggle = id =>
    setState(state => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      setcount(count+1)
      const won = isWon(checked);
      return {
        ...state,
        checked,
        won
      };
    });

  return (
    <div >
<p className="title">MACHINE LEARNING BINGO</p>


    <div className="appcontainer">
      {/* <h1 className="title">Bingo</h1> */}
      {/* <p className="title">BINGO</p> */}
      {/* <img src='./epilogooo.png'></img>  */}
      <div className="wrapper">
      
        {Object.keys(data).map(id => (
          <Tile
            key={id}
            id={id}
            isSet={!!state.checked[id]}
            onToggle={() => toggle(id)}
          >
          {id ==12 ?
        
            <img src='./Epi_logo.png'  ></img> : data[id]
          }
            
          </Tile>
        ))}
      </div>
      {state.won ?<div> <Confetti /> <Congrats/> </div> : null}
     
    </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

