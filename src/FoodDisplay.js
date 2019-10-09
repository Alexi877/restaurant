import React from 'react';

const FoodDisplay = () => {
	return(
	<div className = "food-display container-fluid">
     <div className = "row">
     <div className = "image-show col-12 d-inline-flex my-auto">
      <div className ="pupusa col-8 mx-auto d-inline-flex my-auto">
     <img className = "img-fluid" src = "https://www.zestuous.com/wp-content/uploads/2013/03/cheese-filling.jpg" 
     alt = "pupusas" 
     width ="992" 
     height = "660"
     />
      </div>
      <div className = "sides-class col-4 mx-auto my-auto">
     <img className="img-fluid" src = "https://t1.rg.ltmcdn.com/es/images/4/6/5/img_salsa_para_pupusas_15564_orig.jpg" 
     alt = "salsa" 
     height = "300" 
     width ="360"
     />
     <img className="py-3 img-fluid" src = "https://www.curiouscuisiniere.com/wp-content/uploads/2019/08/El-Salvadoran-Curtido-Pickled-Cabbage-Slaw-8315-450.jpg" 
     alt="curtido"
     height ="300"
     width="360"
     />
      </div>
     </div>
    </div>
    </div>
		)
}

export default FoodDisplay;