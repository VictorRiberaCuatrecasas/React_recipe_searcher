import React from 'react';
import style from "../css_modules/recipe.module.css";


// className={style.class}

function Recipe(props){

    const recipe = props.location.recipeProps
    console.log(props.location.recipeProps)  


    
    return(
        <div className="container">
            <h1 className="text-center my-5 recipeTitle">{recipe.label}</h1>
            <div className="d-flex justify-content-center row mb-2">
                <img className={`${style.recipeIMG} col-12 col-md-6 mb-3`} src={recipe.image} alt={recipe.label}/>
                <div className="col-12 col-md-6 mb-3 ml-3 d-flex flex-wrap align-items-center">
                    <div className="col-12">
                        <p>Calories: <span>{Math.floor(recipe.calories)} kcal</span></p>
                        <p>Number of servings: <span>{recipe.yield}</span></p>
                        <p>Preparation time: <span>{recipe.totalTime} min.</span></p>
                        <p>Caution: {recipe.cautions.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}</p>
                        <p className="pb-2">Labels: {recipe.dietLabels.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}{recipe.healthLabels.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}</p>  
                    </div>
                    <div className="mb-1 col-12">
                        <h3 className="mb-0">Ingredients:</h3>
                        <div>
                            {recipe.ingredientLines.map((step, index) => <p key={index} className={style.steps}>{step}</p>)}
                        </div>
                    </div>
                    <a className="col-12" href={recipe.url}>Full recipe here.</a>
                </div>
            </div>
            <div>
                <h3 className="mb-0">Nutrients:</h3>
                <div>
                    {recipe.digest.map((nutrient, index) => <span key={index}>{nutrient.label} {Math.round(nutrient.total * 1000) / 1000 }{nutrient.unit}. &nbsp;&nbsp; </span>)}
                </div>
            </div>
        </div>
    )
} 


export default Recipe;