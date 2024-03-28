import "./Conact.css";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Conact = () => {

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    const phoneNumber = formData.get("Number");

    // Check if all fields are filled
    let allFieldsFilled = true;
    formData.forEach((value) => {
      if (value.trim() === "") {
        allFieldsFilled = false;
        return;
      }
    });

    if (!allFieldsFilled) {
      toast.error("Please fill in all fields");
      return;
    }

    // Check if phone number is 10 digits
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // If all validations pass, submit the form
    fetch(
      "https://script.google.com/macros/s/AKfycbzMsJvL5peXCcBJw0ITCiUPHZjvI69ZjVT9XVFipo8Fbs-j7nUCHWrHfuUWQKqTD67rxw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          toast.success("Successfully Submitted");
        } else {
          toast.error("Failed to submit form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      });
  }
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
      <form data-aos="fade-down-Right" className="right" onSubmit={(e) => Submit(e)}>
        <div className="input">
          <div class="input-1">
            <input type="text" id="name" name="Name" required />
            <label for="name" class="name">
              Name *
            </label>
          </div>
          <div class="input-2">
            <input type="number" id="number" name="Number" required />
            <label for="number" class="number">
              Number *
            </label>
          </div>
        </div>
        <div className="textarea">
          <textarea rows={6} placeholder="Text Your Message *"  name="TextYourMessage" required></textarea>
        </div>
        <input type="submit" value="Send" className="butt"/>
      </form>
    </div>
    <Footer/>
   </div>

  );
};

export default Conact;
