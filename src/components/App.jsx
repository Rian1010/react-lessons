import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
// import List from './List';
import * as pi from './Math';
import Alphabet from './Koreanpedia';
import cars from './List';

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  })
  const [isMousedOver, setBgColur] = useState(false);

  function handleChange(e) {
    // const newValue = e.target.value;
    // const inputName = e.target.name;
    const {name, value} = e.target

    setFullName(prevValue => {
      if (name === "fName") {
        return{
          fName: value,
          lName: prevValue.lName,
        }
      } else if (name === "lName") {
        return{
          fName: prevValue.fName,
          lName: value,
        }
      }
    });
  }

  function MousedOver() {
    setBgColur(true)
  }

  return (
    <div>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input 
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white"}}
          onMouseOver={MousedOver}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

// --------------------------------------------------- Part 5 Event Handling and Forms --------------------------------------------------- //

// function App() {
//   const [headingText, setHeadingText] = useState("Hello")
//   const [isMousedOver, setMouseOver] = useState(false)
//   const [name, setName] = useState("");
//   const [nameSubmit, setNameSubmit] = useState("");

//   function handleClick() {
//     setHeadingText("Waddup")
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false)
//   }

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   function handleNameSubmit(event) {
//     setNameSubmit(name)

//     event.preventDefault();
//   }

//   return (
//     <div>
//       <h1>{headingText} {name}</h1>
//       <form onSubmit={handleNameSubmit}>
//       <input 
//         onChange={handleChange}
//         type="text" 
//         placeholder="What's your name?"
//         value={name}
//       />
//       <button
//         type="submit"
//         style={{ backgroundColor: isMousedOver ? "black" : "white"}}
//         onClick={handleNameSubmit}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//       </form>
//       <h2>{nameSubmit}</h2>
//     </div>
//   );
// }

// --------------------------------------------------- Part 4 Objects, Arrays and Destructuring --------------------------------------------------- //

// function App() {
//   const [honda, tesla] = cars
//   console.log(honda)
//   const {speedStat: {topSpeed: hondaTopSpeed}} = honda;
//   const {speedStat: {topSpeed: teslaTopSpeed}} = tesla;

//   const {coloursByPopularity: [hondaTopColour]} = honda;
//   const {coloursByPopularity: [teslaTopColour]} = tesla

//   return (
//     <table style={{textAlign: "center"}}>
//       <tr>
//         <th>Brand</th>
//         <th>Top Speed</th>
//         <th>Top Colour</th>
//       </tr>
//       <tr>
//         <td>{tesla.model}</td>
//         <td>{teslaTopSpeed}</td>
//         <td>{teslaTopColour}</td>
//       </tr>
//       <tr>
//         <td>{honda.model}</td>
//         <td>{hondaTopSpeed}</td>
//         <td>{hondaTopColour}</td>
//       </tr>
//     </table>
//   )
// }

// --------------------------------------------------- Part 3 useState --------------------------------------------------- //

// function App() {
//   let time = new Date().toLocaleTimeString();

//   const [timeStamp, getTime] = useState(time);

//   function callTime() {
//       const newTime = new Date().toLocaleTimeString();
//       getTime(newTime);
//   }setInterval(callTime, 1000)
//   return ( 
//       <div>
//           <h1>{timeStamp}</h1>
//           <button onClick={callTime}>Get Time</button>
//       </div>
//   )
  // const [count, setCount] = useState(0)

  // function increase() {
  //   setCount(count + 1)
  // }

  // function decrease() {
  //   setCount(count - 1)
  // }

  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={increase}>+</button>
  //     <button onClick={decrease}>-</button>
  //   </div>
  // )
// }



// --------------------------------------------------- Part 2 Maps, Reduce, Filter --------------------------------------------------- //

// const NewKoreanPedia = Alphabet.map(letter => letter.english.substring(0, 1));
// console.log(NewKoreanPedia);

// const arr = [1,2,3];
// const NewReduce = arr.reduce((accumulator, currentVale) => accumulator + currentVale);
// console.log(NewReduce);

// const NewNum = arr.find(num => num > 1);
// console.log(NewNum);

// const NewNum2 = arr.findIndex(num => num > 1);
// console.log(NewNum2);

// // function createEntry(letter) {
// //   return <Entry
// //     key = {letter.id}
// //     korletter = {letter.korean}
// //     engletter = {letter.english}
// //   />
// // }
// function App() {
//   return(
//     <div>
//       <h1>한국을 배우자! - Let's Learn Korean!</h1>
//       {Alphabet.map(letter => (
//         <Entry 
//           key = {letter.id} 
//           korletter = {letter.korean} 
//           engletter = {letter.english} 
//         />
//       ))}
//     </div>
//   );
// }

// --------------------------------------------------- Part 1 Basics --------------------------------------------------- //
// const name = "Rian";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

// const img = "https://picsum.photos/200"

// const customStyle = {
//   color: "darkorange",
//   fontSize: "20px",
//   border: "1px solid black"
// }

// function App() {
//   return (
//     <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
//     <List nickname="YaBoi" age="21"/>
//     <ul>
//       <li>{pi.default}</li>
//       <li>{pi.doublePi()}</li>
//       <li>{pi.triplePi()}</li>
//       <li>{pi.add(1,2)}</li>
//     </ul>

//     <h2>Hi {name}</h2>
//     <p>Year: {year}</p>
//     <p>The random number is: {Math.floor(Math.random()*10)}</p>
//     <img 
//     className="food-img" 
//     alt="random image" 
//     src={img + "?grayscale"} 
//     />
//     <p style={customStyle}>Colour</p>
//   </div>
//   );
// }

export default App;
