import "./Conact.css";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Conact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    const phoneNumber = form.current.user_call.value.trim(); // Corrected the field name to user_phone

    // Check if the phone number is exactly 10 digits
    if (!/^\d{10}$/.test(phoneNumber)) {
      // If the phone number is not exactly 10 digits, display an error message
      toast.error("Please enter a 10-digit phone number");
      return; // Exit the function early
    }
  

    emailjs
      .sendForm('service_qpoixqc', 'template_74uj766', form.current, {
        publicKey: 'gmkXX07K07JyAIAF2',
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Message Successfully Submitted");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Please Check Your Message");
        }
      );
  };
  return (
   <div>
    <Navbar/>
    <h1 data-aos="fade-up-right" className="achi">
      <hr></hr>
      Contact Us
      <hr></hr>
      </h1>

     <div id="Contact" className="contact">
      <div data-aos="fade-down-right" className="left">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6767117511836!2d78.81462390978614!3d10.367713289714569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0079c80cb3f38d%3A0xbc0bc72b651b8555!2sSaint%20France%20De%20Sales%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1707974362991!5m2!1sen!2sin"
            width="400"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="location"
            style={{ border: "none", borderRadius:"8px"}}
          ></iframe>
          <h2 className="map-h2">Saint Francis De Sales Matriculation Higher Secondary School</h2>
          <p>East, 4th Street, Kalif Nagar, Diamond Nagar, Pudukkottai, Tamil Nadu 622001</p>
        </div>
      </div>
      <form data-aos="fade-down-Right" className="right" ref={form} onSubmit={sendEmail}>
        <div className="input">
          <div class="input-1">
            <input type="text" id="name" name="user_name" required />
            <label for="name" class="name">
              Name *
            </label>
          </div>
          <div class="input-2">
            <input type="number" id="number" name="user_call" required />
            <label for="number" class="number">
              Number *
            </label>
          </div>
        </div>
        <div className="textarea">
          <textarea rows={6} placeholder="Text Your Message *"  name="user_msg" required></textarea>
        </div>
        <input type="submit" value="Send" className="butt"/>
      </form>
    </div>
    <Footer/>
   </div>

  );
};

export default Conact;
