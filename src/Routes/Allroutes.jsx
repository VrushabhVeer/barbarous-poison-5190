import React from "react";
import { Routes, Route } from "react-router-dom";
import Partners from "./Partners";
import Register from "./Register";
import JoinMovement from "./JoinMovement";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import Calenders from "./Calenders";
import TheApp from "./TheApp";
import Home from "../PeopleOne/Home";
import Reciepe from "../PeopleOne/Reciepe";
import Community from "../PeopleOne/Community";

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/register" element={<Register />} />
                <Route path="/joinMovement" element={<JoinMovement />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/calenders" element={<Calenders />} />
                <Route path="/theapp" element={<TheApp />} />
                <Route path="/peopleOne" element={<Home />} />
                <Route path="/healthy_Reciepe" element={<Reciepe />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </div>
    );
};

export default Allroutes;
