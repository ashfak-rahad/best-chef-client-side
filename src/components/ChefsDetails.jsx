import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const [like,setLike]=useState(false);
const ChefsDetails = ({ data }) => {
    const [isLiked, setIsLiked] = useState(false)

   
    const hangleFavoriteBtn = () => {
        toast("Added in Favorite")
            setIsLiked(true)
        }
    const likeButton =()=>{
        // setLike(true)
      toast('added food')

    }
  const {id, img,name,bio,experience,recipes } = data;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96"
            src={img}
            alt="chefs"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <p>{experience}</p>
          <>Recipes:{
            recipes.map(recipe=> <p> {recipe.name}</p>)
          }</>
          
            <button  onClick={hangleFavoriteBtn}  className={isLiked ? "btn-disabled" : "btn btn-primary"}> Like</button>
            <ToastContainer />
          
          
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}><button className="btn btn-primary">Views Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
