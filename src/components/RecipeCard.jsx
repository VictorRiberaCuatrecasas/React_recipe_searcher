import React from "react";
import {Link} from "react-router-dom";
import style from "../css_modules/recipeCard.module.css";


function Recipe(props){
    return(
        <div>
            <Link className="link" style={{textDecoration: "none"}} to={{
                pathname: `/recipes/${props.recipe.label}`,
                recipeProps: props.recipe
                }}>
                <div className={style.recipeCard}>
                    <div className={style.outsideImg}>
                        <div className={style.insideImg}  style={{backgroundImage: `url(${props.recipe.image})`}} role="img" aria-label={props.recipe.label} ></div>
                    </div>
                   <div className={`${style.cardInfo} px-2`}>
                        <h1>{props.recipe.label}</h1>
                        <p>Calories: <span>{Math.floor(props.recipe.calories)} kcal</span></p>
                        <p>Number of servings: <span>{props.recipe.yield}</span></p>
                        <p>Caution: {props.recipe.cautions.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}</p>
                        <p className="pb-2">Labels: {props.recipe.dietLabels.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}{props.recipe.healthLabels.map((item, i, arr) => <span key={i}>{item}{i !== (arr.length-1) ? ', ' : ''}</span>)}</p>        
                   </div>
                </div>
            </Link>
            
        </div>
    )
}


export default Recipe


