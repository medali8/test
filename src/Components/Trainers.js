import React from 'react'
import pic1 from "../Assets/person_1.jpg";
import pic2 from "../Assets/person_2.jpg";
import pic3 from "../Assets/person_3.jpg";
const Trainers = () => {
  return (
    <section id="coachs">
        <br></br><br></br>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="text-center et">EXPERT TRAINERS</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1 class="text-center ot">OUR TRAINERS</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top coachcard" src={pic1} />
                        <div class="card-body">
                            <h5 class="card-title text-center">Ahmed Akir</h5><br></br>
                            <p class="coachtype">Fitness Coache work to understand what their clients' current level of fitness is, what their goals are, and how to help them accomplish those goals</p>
                            <div class="text-center">
                                <i class="bi bi-facebook"></i>&nbsp;&nbsp;
                                <i class="bi bi-instagram"></i>&nbsp;&nbsp;
                                <i class="bi bi-twitter"></i>&nbsp;&nbsp;
                                <i class="bi bi-linkedin"></i>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top coachcard" src={pic2} />
                        <div class="card-body">
                            <h5 class="card-title text-center">Salma ben slema</h5><br></br>
                            <p class="coachtype">Fitness Coaches work to understand what their clients' current level of fitness is, what their goals are, and how to help them accomplish those goals</p>
                            <div class="text-center">
                                <i class="bi bi-facebook"></i>&nbsp;&nbsp;
                                <i class="bi bi-instagram"></i>&nbsp;&nbsp;
                                <i class="bi bi-twitter"></i>&nbsp;&nbsp;
                                <i class="bi bi-linkedin"></i>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img class="card-img-top coachcard" src={pic3} />
                        <div class="card-body">
                            <h5 class="card-title text-center">Paris saint germain</h5><br></br>
                            <p class="coachtype">Fitness Coaches work to understand what their clients' current level of fitness is, what their goals are, and how to help them accomplish those goals</p>
                            <div class="text-center">
                                <i class="bi bi-facebook"></i>&nbsp;&nbsp;
                                <i class="bi bi-instagram"></i>&nbsp;&nbsp;
                                <i class="bi bi-twitter"></i>&nbsp;&nbsp;
                                <i class="bi bi-linkedin"></i>&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    </section>
  )
}

export default Trainers