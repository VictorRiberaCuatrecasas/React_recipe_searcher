import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import Recipe from "./views/Recipe";
import Notfound from "./views/404";
import Footer from "./components/Footer"

function App() {


  return (
    <div className="App">
		<Router>
			<div className="content">
				{/* nav */}
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/recipes/:recipe" component={Recipe}></Route>
					<Route component={Notfound} />
				</Switch>	
				<Footer />
			</div>
		</Router>
    </div>
  );
}

export default App;

