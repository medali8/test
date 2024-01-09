import React from 'react'
import pic1 from "../Assets/carousel-1.jpg";

const Home = () => {
  return (
    <section > 
            <img class="w-100" src={pic1} />
            <div class="title">
                <h1>FITNESS</h1>
                <h2>BUILD YOUR BODY WITH OUR COACHS</h2>
            </div>
            <div class="buttons">
                <a href="#reviews"><button class="btn1">Reviews</button></a>&nbsp;&nbsp;&nbsp;
                <a href="#contact"><button class="btn2">Contact Us</button></a>
            </div>
    </section>
  )
}

export default Home