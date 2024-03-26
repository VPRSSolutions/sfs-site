import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import about from "../images/school.webp";
import "./Aboutdetail.css";
import Ourmission from "../Ourmission/Ourmission"

const Aboutdetail = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="ab">
          <hr></hr>
          <h1>Desalites are designed here</h1>
          <hr></hr>
        </div>
        <img src={about} alt="School" />
      </div>

      <div className="about-det">
        <p>
          S.F.S Matriculation Higher Secondary School, Pudukkottai, was
          established on 7 June 1995, with the initiative of Fr. Jose
          Puthiaparambil and Fr. Peter Chakkulickal. They, along with the help
          of diocesan priests, acquired 3 acres of land in 1982 from Mr. Robert,
          an Anglo-Indian, in Pudukkottai town, with the intention of building a
          seminary. However, the land was initially used to start Anbu Illam
          (Minor Seminary), which was later found unsuitable for the purpose. In
          1995, the old houses on the land were demolished, and a small thatched
          shed was constructed to start a nursery school. The school's history
          began with just 16 children under the guidance of Fr. C. Sebastin Raj.
          The following year, in 1996, Grade 1 was introduced, and the total
          number of students increased to 44.<br></br>
          <br></br>
          During Fr. R. Mathias's tenure as principal from 1996 to 2004, Fr.
          Johnson Jayapaul served as the procurator of the school. Following Fr.
          Jayapaul, Fr. Micheal took over as the procurator, contributing to the
          school's growth and success alongside Fr. Mathias. Together, they
          oversaw the development of the school into a respected educational
          institution in the region. In 2004, the first batch of 23 students
          appeared for their board exams, and all of them passed with First
          Class. This marked a significant milestone for the school. The next
          year, in 2005, the school was upgraded to a higher secondary school.
          <br></br>
          <br></br>
          Fr. R. Mathias served as the principal from 1996 to 2004, during which
          the school saw steady growth in student enrollment. By 2004, the
          school had 1850 students and 60 teachers. Fr. A. Lawrence took over as
          principal in 2004 and led the school through a period of expansion and
          development. In 2005, Fr. S. Arockiasamy became the principal and
          introduced several infrastructural improvements, including new
          Chemistry, Physics, Computer, and audio-visual labs. Under his
          leadership, the school achieved academic excellence and was recognized
          by the government of Tamilnadu with the Best Teacher Award in 2008.
          <br></br>
          <br></br>
          During Fr. Arockiasamy's period as principal, Fr. Patrick Jayaraj, Fr.
          Britto, and Fr. Vedaraj served as procurators one after the other,
          contributing to the school's development alongside Fr. Arockiasamy.
          Together, they oversaw infrastructural improvements and academic
          achievements, further enhancing the school's reputation. Fr. A. Arul
          Francis took over as principal in 2011 and continued to lead the
          school towards academic excellence. Under his guidance, the school
          secured District Second in higher secondary. During Fr. Arul Francis's
          tenure as principal, Fr. Vedaraj and Fr. Vincer served as procurators
          one by one, contributing to the school's development alongside Fr.
          Francis.<br></br>
          <br></br>
          In 2017, Fr. A. Lawrence took charge as the principal of S.F.S
          Matriculation Higher Secondary School, Pudukkottai. During his tenure,
          Fr. Charles served as the procurator, contributing to the school's
          management and development alongside Fr. Lawrence. Together, they
          continued to uphold the school's standards of academic excellence and
          overall growth. Following Fr. Charles, Fr. Sahayaraj served as the
          procurator until 2023, working alongside Fr. Lawrence to ensure the
          school's continued success and growth.<br></br>
          <br></br>

          S.F.S Matriculation Higher Secondary School, Pudukkottai, has seen a dynamic leadership transition in 2023, with Fr. John Thadews accepting the role of principal and Fr. Nayaga Seelan as the procurator. This change marks a new chapter in the school's journey, with both leaders dedicated to maintaining and enhancing the school's standards of excellence.

Fr. John Thadews, as principal, brings a wealth of experience and a vision for continued growth and development. Under his leadership, the school is expected to focus on academic excellence, holistic student development, and fostering a positive learning environment.<br></br>
          <br></br>

Fr. Nayaga Seelan, as the procurator, plays a crucial role in managing the school's finances and resources efficiently. His role is vital in ensuring that the school has the necessary resources to support its educational mission and goals.

Together, Fr. John Thadews and Fr. Nayaga Seelan are expected to lead S.F.S Matriculation Higher Secondary School, Pudukkottai, with dedication and commitment, further enhancing its reputation as a premier educational institution in the region.<br></br>
          <br></br>

"The students who studied at S.F.S Matriculation Higher Secondary School, Pudukkottai, have gone on to achieve greatness in various fields. They include doctors, serving the community with their medical expertise; inspectors, ensuring law and order in society; entrepreneurs, lawyers, actors, engineers....  Their diverse achievements reflect the school's commitment to nurturing talent and fostering excellence in all fields."<br></br>
          <br></br>
The SFS school in Pudukkottai is renowned for its commitment to fostering disciplined individuals, imparting top-notch education, and honing exceptional spoken English skills. These pillars of excellence are at the forefront of the school's mission, aiming to equip students with the tools for success in a competitive world.<br></br>
          <br></br>
The SFS school is a sanctuary where students can truly experience a vibrant schooling atmosphere. Its serene surroundings, framed by verdant trees and grand, imposing pillars, create an awe-inspiring backdrop. The expansive grounds provide a playground for sports and games, enhancing the overall educational experience.
        </p>
        <Ourmission/>
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutdetail;
