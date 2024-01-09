import React from 'react'
import pic1 from "../Assets/img_1_square.jpg";
import pic2 from "../Assets/img_2_square.jpg";
import pic3 from "../Assets/img_3_square.jpg";
import pic4 from "../Assets/img_4_square.jpg";

const Classes = () => {
  return (
    <section id="featuredclass">
        <br></br><br></br><br></br>
    <div class="container">
        <div class="row">
            <div class="col" >
                <h1 class="text-center fs">FEATURED CLASSES</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h1 class="text-center tc">THE CLASSES</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <div class="card">
                    <img src={pic1} class="card-img-top" />
                    <div class="card-body">
                        <p class="card-text text-center ctype">Mind and Body</p>
                        <p>Feel better inside and out with our Mind and Body group . Build your strength and flexibility in our lower-impact classes like Pilates, and feel revived and relaxed with our mindfulness-focused sessions, such as Yoga.</p><br></br>
                        <p class="price text-center">29.99DT per month <br></br>
                            <div class="text-center"> <input type="button" value="Add to cart"  id="btnbuy" /></div></p>
                    </div>
                </div>
            
            </div>
            <div class="col-3">
                <div class="card">
                    <img src={pic2} class="card-img-top"/>
                    <div class="card-body">
                        <p class="card-text text-center ctype">Strength</p>
                        <p>Build muscle and feel better with our Strength classes. Choose from, motivational group exercise classes like Legs Bums and Tums and Circuit Training that’ll help you strengthen and condition your whole body.</p><br></br>
                        <p class="price text-center">19.99DT per month <br></br>
                            <div class="text-center"> <input type="button" value="Add to cart"  id="btnbuy" /></div></p>
                    </div>
                </div>
            
            </div>
            <div class="col-3">
                <div class="card">
                    <img src={pic3} class="card-img-top" />
                    <div class="card-body">
                        <p class="card-text text-center ctype">Cardio</p>
                        <p>Get your heart pumping with our fast-paced, high-energy Cardio classes. Spanning HIIT, Group Cycle, Aqua Aerobics and much more, these group fitness classes are a great way to stay healthy and have fun while doing it.</p><br></br>
                        <p class="price text-center">49.99DT per month<br></br>
                            <div class="text-center"> <input type="button" value="Add to cart"  id="btnbuy" /></div></p>
                    </div>
                </div>
            
            </div>
            <div class="col-3">
                <div class="card">
                    <img src={pic4} class="card-img-top" />
                    <div class="card-body">
                        <p class="card-text text-center ctype">Dance</p>
                        <p>Get fit and feel great with our selection of Dance classes. From Zumba to Social Dance, these group exercise classes are guaranteed to put a smile on your face, enjoy and help you stay active and strong independent djeja.</p><br></br>
                        <p class="price text-center">79.99DT per month 
                            <div class="text-center"> <input type="button" value="Add to cart"  id="btnbuy" /></div></p>
                    </div>
                </div>
            
            </div>
        </div>
        
    </div>
</section>
  )
}

export default Classes