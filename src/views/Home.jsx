import React, {useState, useEffect} from "react";
import RecipeCard from "../components/RecipeCard";
import style from "../css_modules/home.module.css";


function Home(){

    const APP_KEY = process.env.REACT_APP_API_KEY;
    const APP_ID = process.env.REACT_APP_APP_ID;

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState({
        name: "",
        time: "",
        num: ""  
    })
    const [search, setSearch] = useState({
        name: "",
        time: "",
        num: ""      
    });
   
    useEffect(() => {
     getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query.name}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${query.num === "" ? "100" : query.num}&time=${query.time === "" ? "9999" : query.time}`);
        const data = await response.json()

        setRecipes(data.hits)
        console.log(data.hits)
    }

    function handleChange(evt){
        const { name, value } = evt.target;

        setSearch( prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    function searchRecipes(e){       
        setQuery(search)
        setSearch({
            name: "",
            time: "",
            num: ""
        })
    }



    return(
        <div>
            <h1 className={style.title}>FIND YOUR RECIPE</h1>
            <div className={style.search}>
                <input onChange={handleChange} name="name" value={search.name} type="text" placeholder="What do you want to eat?"/>
                <input onChange={handleChange} name="time" value={search.time} type="text" placeholder="Max preparation time (in min)"/>
                <input onChange={handleChange} name="num" value={search.num} type="text" placeholder="Number of recipes (100 max)"/>
                <button className={style.myButton} onClick={searchRecipes} type="submit" >
                    Search
                </button>

                {query.name !== "" && <p className="mt-3">You are looking for <strong>{query.num !== "" && query.num} {query.name}</strong> recipes{query.time !== "" ? " with a preparation time of " + query.time + " min max." : "."  }  </p>}
            </div>

            
            <div className={style.cardsContainer}>
                {recipes.map((recipe, index) => <RecipeCard className={style.cardComponent} key={index} recipe={recipe.recipe}/>)}
            </div>
        </div>    	
    )
}

export default Home