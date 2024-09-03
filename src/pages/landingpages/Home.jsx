    import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Customers from "./customers/Customers";
import Features from "./features/Features";
import DetailService from "./Detailed Service/DetailService"
import Pricing from "./pricing/Pricing";
import Demo from "./demo/Demo";
import Project from "./project/Project";
import Footer from "./footer/Footer";

    const Home=()=>{
        return(
            <>
            
            <Navbar/>
            <Hero/>
            <Customers/>
            <DetailService/>
            <Project/>
            <Features/>
            <Pricing/>
            <Demo/>
            <Footer/>
            </>
        )
    }

export default Home;