import React from "react"

function Card(props){
    return (
    <li>
    <h2>{props.title}</h2>
    <p>{props.director}</p>
    <button onClick = {props.clickToDelete}>Delete</button>
    </li>
    )
}
export default Card