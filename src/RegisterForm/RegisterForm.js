import "./RegisterForm.css";
import { toast } from "react-toastify";
import logo from "../images/logo.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// export let newClassDetail;
const RegisterForm = () => {
  function HandleSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    const user_number = formData.get("user_number");
    const user_pincode = formData.get("user_pincode");

    if (user_number.length !== 10) {
      toast.error("Phone number should be 10 digits");
      return;
    }

    if (user_pincode.length !== 6) {
      toast.error("Pincode should be 6 digits");
      return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxu5xdNxK0LyA91Myd53AjySAS6ShhXJ8-DXe003Hfvc1MRSY_CNRrJnPvk8_DqHTfFdg/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Application Submitted")
      })
      .catch((error) => {
        console.error(error);
        toast.error("Please check your application details.");
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

      <form className="staff-form" onSubmit={(e) => HandleSubmit(e)}>
        <div className="forms">
          <div>
            <p>1. Name of the Pupil (BLOCK LETTERS)</p>
            <input type="text" name="user_name" required />
          </div>
          <div>
            <p>2. Date of Birth</p>
            <input
              type="date"
              name="user_dob"
              required
              style={{
                color: "black",
                textTransform: "uppercase",
              }}
            />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p>3.Gender</p>
            <select
              style={{ width: "425px" }}
              className="sel"
              name="user_gender"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
          </div>
          <div>
            <p>4. Phone number </p>
            <input type="number" name="user_number" required />
          </div>
          <div>
            <p>
              5.{" "}
              <span>
                <h4>a,</h4>
              </span>{" "}
              Class to which Admission is sought
            </p>
            <input type="text" name="user_admissionfor" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              {" "}
              <span>
                <h4>b,</h4>
              </span>{" "}
              Mother tongue of the Pupil
            </p>
            <input type="text" name="user_Mtongue" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              {" "}
              <span>
                <h4>c,</h4>
              </span>{" "}
              School where the Pupil studied <br></br>
              Previously and the class
            </p>
            <input type="text" name="user_Prevstudied" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              {" "}
              <span>
                <h4>d,</h4>
              </span>{" "}
              Position of the Pupil in the class <br></br>
              Rank / Grade
            </p>
            <input type="text" name="user_classrank" required />
          </div>
          <div>
            <p>
              6.{" "}
              <span>
                <h4>a,</h4>
              </span>
              Nationality
            </p>
            <input type="text" name="user_nationality" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              Religion
            </p>
            <input type="text" name="user_religion" required />
          </div>
          <div>
            <p>
              7.
              <span>
                <h4>a,</h4>
              </span>
              Father's Name and Qualification
            </p>
            <input type="text" name="user_fathetqualification" required />
          </div>
          <div>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              Occupation & Income P/M
            </p>
            <input type="text" name="user_faincome" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>c,</h4>
              </span>
              Mother's Name and Qualification
            </p>
            <input type="text" name="user_mNameQualification" required />
          </div>
          <div>
            <p>8. Home Address of father</p>
            <input type="text" name="user_homeadd" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p>9. State to which the parents belong</p>
            <select
              id="cities"
              name="user_parentbelang"
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
            <input type="number" name="user_pincode" required />
          </div>
          <div>
            <p>
              11.{" "}
              <span>
                <h4>a,</h4>
              </span>
              Has the applicant any brothers or sisters<br></br>
              (not cousins) in this school
            </p>
            <input type="text" name="user_brosis" required />
          </div>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ marginLeft: "30px" }}>
              <span>
                <h4>b,</h4>
              </span>
              if so, state name, class and roll number
            </p>
            <input type="text" name="user_naclro" required />
          </div>

          <div>
            <p>
              12. Will the pupil stay with parents or gardian, if<br></br>
              with the gardian, his / her address
            </p>
            <input type="text" name="user_gardian" required />
          </div>

          <input type="submit" value="Register Now" className="btn-1" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default RegisterForm;
