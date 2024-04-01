import "./RegisterForm.css";
import logo from "../images/logo.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// export let newClassDetail;
export default function RegisterForm() {
  const navigate = useNavigate();
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    const phoneNumber = formData.get("PhoneNumber");
    const pincode = formData.get("Pincode");

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

    // Check if pincode is 6 digits
    if (pincode.length !== 6 || isNaN(pincode)) {
      toast.error("Please enter a valid 6-digit pincode");
      return;
    }

    // If all validations pass, submit the form
    fetch(
      "https://script.google.com/macros/s/AKfycbxHAbvjaBmVge2Bsl3Aaw9Dja_2nGilK9qJV243Rr-VlqW7ZjwXApdb63odb48x4rujfA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          toast.success("Thank You for Your Registration Successfully Submitted");
          window.scrollTo(0, 0);
          navigate("/Examdetails"); // Redirect to success page if needed
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
    <div className="main">
      <Navbar />
      <div className="form-container">
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{ textAlign: "center" }}>
          <h1>S.F.S</h1>
          <h2>Matriculation Higher Secondary School</h2>
          <h4>Kalif Nagar, Pudukkottai - 622 001</h4>
          <h5>Phone: 04322 - 265198</h5>
        </div>
        <div className="head">
          <h2>Registration Form</h2>
        </div>
      </div>

      <form className="staff-form" onSubmit={(e) => Submit(e)}>
        <div className="forms">
          <div>
            <p>1. Name of the Pupil (BLOCK LETTERS)</p>
            <input type="text" name="Name" required />
          </div>
          <div>
            <p>2. Date of Birth</p>
            <input
              type="date"
              name="DOB"
              required
              style={{
                color: "black",
                textTransform: "uppercase",
              }}
            />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p>3.Gender</p>
            <select style={{ width: "425px" }} className="sel" name="Gender">
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <p>4. Phone number </p>
            <input type="number" name="PhoneNumber" required />
          </div>
          <div>
            <p>
              5.
              <span>
                <h4>a,</h4>
              </span>
              Class to which Admission is sought
            </p>
            <input type="text" name="ClassAdmission" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              {" "}
              <span>
                <h4>b,</h4>
              </span>{" "}
              Mother tongue of the Pupil
            </p>
            <input type="text" name="MotherTongueOfPupil" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>c,</h4>
              </span>
              School where the Pupil studied <br></br>
              Previously and the class
            </p>
            <input type="text" name="PreviousStandrand" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
  
              <span>
                <h4>d,</h4>
              </span>
              Position of the Pupil in the class <br></br>
              Rank / Grade
            </p>
            <input type="text" name="PreviousClassRank" required />
          </div>
          <div>
            <p>
              6.
              <span>
                <h4>a,</h4>
              </span>
              Nationality
            </p>
            <input type="text" name="Nationality" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              Religion
            </p>
            <input type="text" name="Religion" required />
          </div>
          <div>
            <p>
              7.
              <span>
                <h4>a,</h4>
              </span>
              Father's Name and Qualification
            </p>
            <input type="text" name="FathersNameOccupation" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              Occupation & Income P/M
            </p>
            <input type="text" name="OcuppationIncomePM" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>c,</h4>
              </span>
              Mother's Name and Qualification
            </p>
            <input type="text" name="MotherNameOccupation" required />
          </div>
          <div>
            <p>8. Home Address of father</p>
            <input type="text" name="HomeAddressFather" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p>9. State to which the parents belong</p>
            <select
              id="cities"
              name="ParentsStateBelong"
              className="sel"
              style={{ width: "425px" }}
            >
              <option>Select City</option>
              <option value="ariyalur">Ariyalur</option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="cuddalore">Cuddalore</option>
              <option value="dharmapuri">Dharmapuri</option>
              <option value="dindigul">Dindigul</option>
              <option value="erode">Erode</option>
              <option value="kanchipuram">Kanchipuram</option>
              <option value="kanyakumari">Kanyakumari</option>
              <option value="karur">Karur</option>
              <option value="krishnagiri">Krishnagiri</option>
              <option value="madurai">Madurai</option>
              <option value="nagapattinam">Nagapattinam</option>
              <option value="namakkal">Namakkal</option>
              <option value="perambalur">Perambalur</option>
              <option value="pudukkottai">Pudukkottai</option>
              <option value="ramanathapuram">Ramanathapuram</option>
              <option value="salem">Salem</option>
              <option value="sivaganga">Sivaganga</option>
              <option value="thanjavur">Thanjavur</option>
              <option value="theni">Theni</option>
              <option value="thoothukudi">Thoothukudi</option>
              <option value="tiruchirappalli">Tiruchirappalli</option>
              <option value="tirunelveli">Tirunelveli</option>
              <option value="tiruppur">Tiruppur</option>
              <option value="tiruvallur">Tiruvallur</option>
              <option value="tiruvannamalai">Tiruvannamalai</option>
              <option value="tiruvarur">Tiruvarur</option>
              <option value="vellore">Vellore</option>
              <option value="viluppuram">Viluppuram</option>
              <option value="virudhunagar">Virudhunagar</option>
            </select>
          </div>
          <div>
            <p>10. Pincode </p>
            <input type="number" name="Pincode" required />
          </div>
          <div>
            <p>
              11.
              <span>
                <h4>a,</h4>
              </span>
              Has the applicant any brothers or sisters<br></br>
              (not cousins) in this school
            </p>
            <input type="text" name="HasApplicantAnyBrothersSisters" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              if so, state name, class and roll number
            </p>
            <input type="text" name="StateNameClassName" required />
          </div>

          <div>
            <p>
              12. Will the pupil stay with parents or guardian, if<br></br>
              with the guardian, his / her address
            </p>
            <input type="text" name="GardianNameAddress" required />
          </div>

          <input type="submit" value="Register Now" className="btn-1" />
        </div>
      </form>
      <Footer />
    </div>
  );
}

// import "./RegisterForm.css";
// import { toast } from "react-toastify";
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import logo from "../images/logo.png";
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import { useNavigate } from "react-router-dom";

// // export let newClassDetail;
// const RegisterForm = () => {

//   const navigate = useNavigate();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const pincode  = form.current.user_pincode.value.trim(); // Corrected the field name to user_phone

//     // Check if the phone number is exactly 10 digits
//     if (!/^\d{6}$/.test(pincode)) {
//       // If the phone number is not exactly 10 digits, display an error message
//       toast.error("Please check your Pincode");
//       return; // Exit the function early
//     }

//     const phoneNumber = form.current.user_number.value.trim(); // Corrected the field name to user_phone

//     // Check if the phone number is exactly 10 digits
//     if (!/^\d{10}$/.test(phoneNumber)) {
//       // If the phone number is not exactly 10 digits, display an error message
//       toast.error("Please enter a 10-digit phone number");
//       return; // Exit the function early
//     }

//     emailjs
//       .sendForm("service_qpoixqc", "template_0fozlbo", form.current, {
//         publicKey: "gmkXX07K07JyAIAF2",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           toast.success("Successfully Your Registration Submitted");
//           navigate("/Examdetails")
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//           toast.error("Please Check Your Application");
//         }
//       );
//   };
//   return (
//     <div className="main">
//       <Navbar/>
//       <div className="form-container">
//         <div>
//           <img src={logo} alt="" />
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <h1>S.F.S</h1>
//           <h2>Matriculation Higher Secondary School</h2>
//           <h4>Kalif Nagar, Pudukkottai - 622 001</h4>
//           <h5>Phone: 04322 - 265198</h5>
//         </div>
//         <div className="head">
//           <h2>Registration Form</h2>
//         </div>
//       </div>

//       <form className="staff-form" ref={form} onSubmit={sendEmail}>
//         <div className="forms">

//           <div>
//             <p>1. Name of the Pupil (BLOCK LETTERS)</p>
//             <input type="text" name="user_name" required />
//           </div>
//           <div>
//             <p>2. Date of Birth</p>
//             <input
//               type="date"
//               name="user_dob"
//               required
//               style={{
//                 color: "black",
//                 textTransform: "uppercase",
//               }}
//             />
//           </div>
//           <div style={{marginBottom:"40px"}}>
//             <p>3.Gender</p>
//             <select style={{width:"425px"}} className="sel" name="user_gender">
//               <option>Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Transgender</option>
//             </select>
//           </div>
//           <div>
//             <p>4. Phone number </p>
//             <input type="number" name="user_number" required />
//           </div>
//           <div>
//             <p>5. <span><h4>a,</h4></span> Class to which Admission is sought</p>
//             <input type="text" name="user_admissionfor" required />
//           </div>
//           <div>
//             <p style={{marginLeft:"30px"}}> <span><h4>b,</h4></span> Mother tongue of the Pupil</p>
//             <input type="text" name="user_Mtongue" required />
//           </div>
//           <div >
//             <p style={{marginLeft:"30px"}}> <span><h4>c,</h4></span> School where the Pupil studied <br></br>
//             Previously and the class
//             </p>
//             <input type="text" name="user_Prevstudied" required />
//           </div>
//           <div style={{marginBottom:"40px"}}>
//             <p style={{marginLeft:"30px"}}> <span><h4>d,</h4></span> Position of the Pupil in the class <br></br>
//             Rank / Grade
//             </p>
//             <input type="text" name="user_classrank" required />
//           </div>
//          <div>
//           <p>6. <span><h4>a,</h4></span>Nationality</p>
//           <input type="text" name="user_nationality" required  />
//          </div>
//          <div style={{marginBottom:"40px"}}>
//          <p style={{marginLeft:"30px"}}><span><h4>b,</h4></span>Religion</p>
//           <input type="text" name="user_religion" required/>
//          </div>
//          <div>
//          <p>7.<span><h4>a,</h4></span>Father's Name and Qualification</p>
//           <input type="text" name="user_fathetqualification" required />
//          </div>
//          <div>
//          <p style={{marginLeft:"30px"}}><span><h4>b,</h4></span>Occupation & Income P/M</p>
//           <input type="text" name="user_faincome" required />
//          </div>
//          <div style={{marginBottom:"40px"}}>
//          <p style={{marginLeft:"30px"}}><span><h4>c,</h4></span>Mother's Name and Qualification</p>
//           <input type="text" name="user_mNameQualification" required />
//          </div>
//          <div>
//          <p>8. Home Address of father</p>
//           <input type="text" name="user_homeadd" required  />
//          </div>
//          <div style={{marginBottom:"40px"}}>
//          <p>9. State to which the parents belong</p>
//           <select id="cities" name="user_parentbelang" className="sel" style={{width:"425px"}}>
//           <option>Select City</option>
//             <option value="ariyalur">Ariyalur</option>
//             <option value="chennai">Chennai</option>
//             <option value="coimbatore">Coimbatore</option>
//             <option value="cuddalore">Cuddalore</option>
//             <option value="dharmapuri">Dharmapuri</option>
//             <option value="dindigul">Dindigul</option>
//             <option value="erode">Erode</option>
//             <option value="kanchipuram">Kanchipuram</option>
//             <option value="kanyakumari">Kanyakumari</option>
//             <option value="karur">Karur</option>
//             <option value="krishnagiri">Krishnagiri</option>
//             <option value="madurai">Madurai</option>
//             <option value="nagapattinam">Nagapattinam</option>
//             <option value="namakkal">Namakkal</option>
//             <option value="perambalur">Perambalur</option>
//             <option value="pudukkottai">Pudukkottai</option>
//             <option value="ramanathapuram">Ramanathapuram</option>
//             <option value="salem">Salem</option>
//             <option value="sivaganga">Sivaganga</option>
//             <option value="thanjavur">Thanjavur</option>
//             <option value="theni">Theni</option>
//             <option value="thoothukudi">Thoothukudi</option>
//             <option value="tiruchirappalli">Tiruchirappalli</option>
//             <option value="tirunelveli">Tirunelveli</option>
//             <option value="tiruppur">Tiruppur</option>
//             <option value="tiruvallur">Tiruvallur</option>
//             <option value="tiruvannamalai">Tiruvannamalai</option>
//             <option value="tiruvarur">Tiruvarur</option>
//             <option value="vellore">Vellore</option>
//             <option value="viluppuram">Viluppuram</option>
//             <option value="virudhunagar">Virudhunagar</option>
//           </select>
//          </div>
//          <div>
//             <p>10. Pincode </p>
//             <input type="number" name="user_pincode" required />
//           </div>
//          <div>
//           <p>11. <span><h4>a,</h4></span>Has the applicant any brothers or sisters<br></br>
//           (not cousins) in this school</p>
//           <input type="text" name="user_brosis" required />
//          </div>
//          <div style={{marginBottom:"40px"}}>
//          <p style={{marginLeft:"30px"}}><span><h4>b,</h4></span>if so, state name, class and roll number</p>
//           <input type="text" name="user_naclro" required  />
//          </div>

//          <div>
//          <p>12. Will the pupil stay with parents or gardian, if<br></br>
//          with the gardian, his / her address</p>
//           <input type="text" name="user_gardian" required />
//          </div>

//           <input type="submit" value="Register Now" className="btn-1" />

//         </div>
//       </form>
//       <Footer/>
//     </div>
//   );
// };

// export default RegisterForm;
