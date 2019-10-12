import React from 'react';

const FoodCard = ({name, description, img}) => {
	return(
		<div className = "food-items">
		 <div className = "container-fluid">
		   <div className="row" >
		    <div className="col">
		<h1 className="food-name text-center"> {name}</h1>
		<div className="img-container">
		<img className ="img-fluid" src = {img} alt="foods"/>
		</div>	
			</div>
		<p className="food-description">{description}</p>
		  </div>
		 </div>
		</div>
		)

}

export default FoodCard;