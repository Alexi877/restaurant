import React from 'react';

const FoodCard = ({name, description, img}) => {
	return(
		<div className = "food-items">
		 <div className = "container-fluid">
		   <div className="row" >
		    <div className="col-12">
		<h1 className="food-name text-center"> {name}</h1>
		<img className ="img-fluid" src = {img} width = "300px" height = "300px" alt="foods"/>
			</div>
		<p className="food-description">{description}</p>
		  </div>
		 </div>
		</div>
		)

}

export default FoodCard;