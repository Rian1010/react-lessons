import React from "react"

const cars = [
    {
        model: "Honda Civic",
        coloursByPopularity: ["black", "silver"],
        speedStat: {
            topSpeed: 140,
            zeroToSixty: 8.5,
        }
    },
    {
        model: "Tesla Model 3",
        coloursByPopularity: ["red", "white"],
        speedStat: {
            topSpeed: 150,
            zeroToSixty: 3.2,
        }
    }
];

export default cars;

// --------------------------------------------------- Props --------------------------------------------------- //

// function Entry(props) {
//     return (
//         <dl>
//             <dt>
//                 <h2>{props.korletter}</h2>
//             </dt>
//             <dd>
//                 <p>{props.engletter}</p>
//             </dd>
//         </dl>
//     );
// }
// --------------------------------------------------- Part 1 --------------------------------------------------- //

// function List(props) {
//     return (
//     <div>
//         <ul>
//             <li>Ramen</li>
//             <li>Sushi</li>
//             <li>떡볶이</li>
//         </ul>
//         <h3>Nickname: {props.nickname}</h3>
//         <p>Age: {props.age}</p>
//     </div>
//     );
// }

// export default Entry;