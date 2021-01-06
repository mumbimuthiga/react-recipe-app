import React from 'react'

export default function Recipe({title ,calories ,image ,ingredients}) {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <h5>{calories} calories</h5>
            <img src={image} alt=""></img>

        </div>
    )
}
