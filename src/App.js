import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import HowItWorks from './HowItWorks'
import "./CSS_folder/Navbar.css";
import AboutUs from './AboutUs';
import Services from './Services';


 const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <HowItWorks />
        <AboutUs />
        <Services />
    </div>
  )
}




export default App