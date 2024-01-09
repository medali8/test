import React from 'react'

const Footer = () => {
  return (
        <footer id="contact" className="bg-dark">
            <br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h3>About us</h3><br></br>
                        <p>Our fitness platform offers a variety of services to help new users achieve their health and fitness goals</p><br></br>
                        <i class="bi bi-facebook"></i>&nbsp;&nbsp;
                        <i class="bi bi-instagram"></i>&nbsp;&nbsp;
                        <i class="bi bi-twitter"></i>&nbsp;&nbsp;
                        <i class="bi bi-linkedin"></i>&nbsp;&nbsp;
                    </div>
                    <div className="col-5">
                        <h3>Contact Info</h3><br></br>
                        <p><span class="text-secondary">Address:</span><br></br>
                            09 Rue Marseille , Ben Arous , Amesterdam</p>
                        <p>
                            <span class="text-secondary">Phone number:</span><br></br>
                            +216 23068800
                        </p>   
                        <p>
                            <span class="text-secondary"> Email:</span><br></br>
                            omar.saidi@esen.tn / rania.koubaa@esen.tn
                        </p> 
                    </div>
                    <div className="col-3">
                        <h3 class="bet">Quick link</h3><br></br>
                        <span class="bet2"><a href="#">Home</a><br></br><br></br>
                        <a href="#schedule">Schedule</a><br></br><br></br>
                        <a href="#coachs">Coachs</a><br></br><br></br>
                        <a href="#reviews">Reviews</a><br></br><br></br>
                        </span>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-12 text-center">
                    <p class="text-secondary text-center"> © Copyright ©2023 All rights reserved , made by Omar Saidi & Rania koubaa  </p>
                    </div>
                </div>
            </div>
        </footer>
     )
}

export default Footer