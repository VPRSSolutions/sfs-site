import App from './App';
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Gallery from "./Gallery/Gallery"
import Events from "./Programs/Events";
import Facilities from './Facilities/Facilities';
import Eventdetails from './Programs/Eventdetail';
import Conact from "./Contact/Conact";
import Achivements from "./Achievements/Achievements";
import Sports from "./Sports/Sports";
import { useState } from 'react';
import RegisterForm from './RegisterForm/RegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Principal/Message';
import Aos from "aos";
import "aos/dist/aos.css";
import Aboutdetail from "../src/About/Aboutdetail"
import Onlinepayment from './Onlinepayment/Onlinepayment';
import Examdetails from './RegisterForm/Examdetails';

function All(){
    useEffect(() => {
        Aos.init();
      }, []);
    const [eventName,setEventname]=useState()
    return(
        <div>
        <ToastContainer style={{ left: "60" }}/>
     <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Gallerys' element={<Gallery/>}/>
        <Route path='/Events' element={<Events setEventname={setEventname}/>}/>
        <Route path='/Facilities' element={<Facilities/>}/>
        <Route path='/Eventdetails' element={<Eventdetails eventName={eventName}/>}/>       
        <Route path='/onlinepayments' element={<Onlinepayment />}/>       
        <Route path='/Sports' element={<Sports/>}/>
        <Route path='/Achivements' element={<Achivements/>}/>
        <Route path='/Contact' element={<Conact/>}/>      
        <Route path='/RegisterForm' element={<RegisterForm/>}/>
        <Route path='/Principalmessage' element={<Message/>}/>      
        <Route path='/Aboutschool' element={<Aboutdetail/>}/> 
        <Route path='/Examdetails' element={<Examdetails/>}/>      
    </Routes>
    </BrowserRouter>
        </div>
   
    )
}


export default All