import React from 'react';

import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import LocationMap from "../../components/locationMap/LocationMap.jsx"
import "./Home.css"



const MyComponent = () => {
    return (
        <div className={"home-cont"}>
        <Navbar></Navbar>
        <Sidebar/>
            <div className={"hplusf"}>
        <Header></Header>
            <div className={"featured-div"}>
                <Featured/>
            </div>
            </div>
        </div>
    );
};

export default MyComponent;
