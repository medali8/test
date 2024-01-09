import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Classes from "./Components/Classes.js";
import Schedule from './Components/Schedule.js';
import Trainers from './Components/Trainers.js';
import Reviews from './Components/Reviews.js';
import Footer from "./Components/Footer.js"
function App() {
  return (
    <body>
    <Navbar />
    <Home/>
    <Classes />
    <Schedule />
    <Trainers />
    <Reviews />
    <Footer />
    </body>
    
  );
}

export default App;
