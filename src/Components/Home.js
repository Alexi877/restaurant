import React from 'react';
import Banner from './Banner';
import FoodDisplay from './FoodDisplay';
import FoodList from './FoodList';
import Foods from '../data.js';

const Home = () =>{
	return(
		<div>
		<Banner />
     <FoodDisplay />
     <FoodList Foods = {Foods} />
		</div>
	)
}

export default Home;