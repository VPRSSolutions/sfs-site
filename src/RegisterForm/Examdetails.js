import "./Examdetails.css";
import Navbar from "../Navbar/Navbar";

const Examdetails = () => {
  return (
    <div>
      <Navbar />
      <div className="exam-message">
        <p className="exam-head">
          <b>Dear Parents,</b>
        </p>
        <br></br>
        <p>
          We Are happy to rigister your Request for admission in our
          School. You are expected to pay <b>RS:300</b> on or Before the
          entrance exam
        </p>
      </div>
      <div className="addmission-details">
        <h1>
          <u>Addmission Procedure 2024 - 25 From LKG to XI</u>
        </h1>
      </div>
      <div className="admission-points">
        <h2 style={{ color: "#621708" }}>1.Submission of Registration Form</h2>
        <h2 style={{ color: "skyblue" }}>2.Attend Entrance Exam (Except LKG)</h2>
        <h2 style={{ color: "red" }}>3.If the candidate is selected:</h2>
        <div className="sub-titile">
          <p>a. Collection of Fees payment Bank challan.</p>
          <p>b. And Paying fees in the bank.</p>
        </div>
        <h2 style={{ color: "#f6aa1c" }}>4.Filling up Admission Form.</h2>
        <h2 style={{ color: "Darkgreen" }}>5.Certificate to be Submitted at the time of Admission:</h2>
        <div className="sub-titile">
          <p>a.Birth Certificate Xerox copy</p>
          <p>b.Community Certificate Xerox copy</p>
          <p>c. Aadhar certifcate Orginal</p>
          <p>e.Passport size photo of the Parents or Gardians</p>
        </div>
      </div>

      <div className="addmission-details">
        <h1>
          <u>Guidelines - Entrance Exam for Admission</u>
        </h1>
      </div>
      <div className="admission-points">
        <h2 style={{ color: "#621708" }}>1.Entrance Exam Model</h2>
        <div className="sub-titile">
          <p>a. Written and Oral Exam</p>
        </div>
        <h2  style={{ color: "skyblue" }}>2.Syllabus for Entrance Exam:</h2>
        <div className="sub-titile">
          <h4  style={{ color: "red" }}>
            i. Question will be asked from Tamil Nadu state board syllabus
          </h4>
          <h4  style={{ color: "red" }}>ii. Subjects:</h4>
          <div className="sub-titile2">
            <p>1.Tamil</p>
            <p>2.English</p>
            <p>3.Maths</p>
            <p>4.Science</p>
            <p>5.Social</p>
          </div>
          <h4  style={{ color: "red" }}>iii. Question Pattern:</h4>
          <div className="sub-titile2">
            <p>1.Objective type questions.</p>
            <p>2.One Paragraph Question each in Tamil & English</p>
          </div>
        </div>
        <h2 style={{ color: "#f6aa1c" }}>3.Date for Entrance Exam:</h2>
        <div className="sub-titile">
          <p>a. April 6th, 13th, 20th and 27th (Morning 9:30 AM ) .</p>
        </div>
        <h2  style={{ color: "Darkgreen" }}>4. Entrance Exam Results.</h2>
        <div className="sub-titile">
          <p>a. April 8th, 15th, 22nd and 29</p>
        </div>
      </div>
    </div>
  );
};

export default Examdetails;
