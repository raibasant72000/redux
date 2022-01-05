import React from "react";
import carimg from "../Assets/car.jpg";
import cartimg from "../Assets/cart.png";
import "./Home.css";

function Home (props){
  console.log("Home:",props.data)
  return (
    <div className="container">
      <div className="add-to-cart">
 
        <img className="cartsize" src={cartimg} alt="cartmg" />
      </div>
      <h1> Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img className="imgsize" src={carimg} alt="carpic" />
        </div>
        <div className="text-wrapper item">
          <span>Automatic Car</span>
          <span>Price: $100000</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={() => 
            props.addToCartHandler({price:1000, name:"iphone11"})
          }> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
