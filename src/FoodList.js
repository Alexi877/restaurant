import React from 'react';
import FoodCard from './FoodCard';

const FoodList = ({Foods}) => {
	return(
		<div className="container-fluid">
		<div className="row">
		<div className ="col-12" >
		<h1 className = "menu-text text-center">Menu</h1>
		</div>
		{
			Foods.map((food, i) => {
				return(
					<FoodCard 
					key = {Foods[i].id}
					name= {Foods[i].name}
					description={Foods[i].description}
					img = {Foods[i].img}
					/>
					)
			})
		}
		</div>
		</div>
		)
}
export default FoodList;