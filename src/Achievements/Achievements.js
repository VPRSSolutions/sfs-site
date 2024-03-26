import "./Achievements.css";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "../Navbar/Navbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import alumini1 from "../images/alumini1.jpg";
import alumini2 from "../images/alumini2.jpg";
import alumini3 from "../images/alumini3.jpg";
import alumini4 from "../images/alumini4.jpg";
import alumini5 from "../images/alumini5.jpg.png";
import alumini6 from "../images/achs.jpg";
import alumini7 from "../images/achs2.jpg";
import alumini8 from "../images/ach5.jpg";

// Achievements component definition
function Achievements() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize(); // Call initially to set the correct number of slides

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1 data-aos="fade-up-right" className="achi">
        <hr></hr>
        Testimonial
        <hr></hr>
      </h1>
      <div className="test">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="testimonial"
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            {/* Testimonial Slide 1 */}
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini1} alt=""></img>
                  <p>
                    L. Jaison<span>(MBBS)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    Stepping through SFS school's gates at 10, I couldn't
                    foresee its profound impact on my future. Until my 2014
                    graduation, SFS was the backdrop for countless memories and
                    formative experiences shaping who I am today. Principals,
                    teachers, and classmates, notably Rev. Fr. S. Arockiasamy
                    and Rev. Fr. A. Arul Francis, nurtured my dreams, especially
                    my goal of becoming a doctor. Beyond academics, SFS ignited
                    my passions for music and basketball, providing diverse
                    experiences and growth opportunities. Reflecting on my time
                    there fills me with gratitude for the unwavering support and
                    sense of belonging from the SFS family. Their influence has
                    been pivotal in shaping both my path and my character.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 2 */}
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini2} alt=""></img>
                  <p>
                    JR. Cyndhia, B.B.A.LL.B(HONS) <span>(ADVOCATE)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    As an August Alumnus of SFS School, I would proudly say that
                    my school has been and will be the "Home for Education and
                    Discipline". I am indeed indebted to this place for shaping
                    me into the person whom I am, today. I have come across a
                    pleathora of teachers in my 13 years of journey with this
                    school, without whom I would've never known how interesting
                    and contending learning can be! Apart from Education, my
                    school has transformed me into a good human being,
                    furthermore, a professional too.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini3} alt=""></img>
                  <p>
                    N. LUKE EMEL RAJ<span>(HEALTH INSPECTOR)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    SFS is such a place I wish I could go back to! It has left
                    an indelible imprint on my heart and that each and every
                    moment spent here, be it in or outside the classroom, will
                    be cherished for a lifetime. The place, the staff and the
                    administrative team have nurtured me with lots of love and
                    care and also at the same time guided me through every thick
                    and thin. I am so humbled and would not hesitate in saying
                    that, I am a part of SFS like SFS is a part of me." SFS has
                    enabled me to bring out my shrouded talent, to nurture and
                    groom myself in the arena of the competitive world. This has
                    really been an awesome feeling to be the part of such a
                    marvellous educational institution.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini4} alt=""></img>
                  <p>
                    L. Alwin <span>(MBBS)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    I am Alwin MBBS "As a doctor and an alumnus of our
                    prestigious school, I am immensely proud of the journey that
                    has led me to where I am today. My education instilled in me
                    a passion for excellence and a commitment to serving others,
                    values that I carry with me in my career as a physician. I
                    am grateful for the strong foundation my school provided me,
                    both academically and personally. It fills me with pride and
                    joy to know that I am making a difference in the lives of
                    others, and I am honored to represent our school's legacy in
                    the field of medicine. Here's to our school, standing tall
                    and mighty for more than 25 years, like a beacon of light
                    guiding generations of students!"
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini5} alt=""></img>
                  <p>
                    T. Joshua Anderson Thomas{" "}
                    <span>
                      ( TECHNICAL PRODUCT OWNER FOR RETAIL ECOMMERCE )
                    </span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    SFS Matriculation School played a pivotal role in my
                    development from Grade 5 to 12. Its commitment to quality
                    education and diverse curriculum laid a solid foundation for
                    my future endeavors. The passionate educators not only
                    imparted knowledge but also fostered curiosity and critical
                    thinking. Engaging in extracurricular activities taught me
                    the value of teamwork and community involvement. The
                    holistic approach to child development instilled core values
                    like honesty and determination in me. These values serve as
                    guiding principles in both personal and professional aspects
                    of my life. Fond memories of friendships and invaluable
                    lessons learned continue to shape my journey. SFS
                    Matriculation School's influence equipped me with essential
                    life skills, enriching my contribution to society.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini3} alt=""></img>
                  <p>
                    N. LUKE EMEL RAJ<span>(HEALTH INSPECTOR)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    Hello to the wonderful students, dedicated teachers, and our
                    esteemed Principal! I've got a quick story to share, not
                    really like advice, more like a sprinkle of inspiration.
                    Back when I was roaming these very classrooms, our school
                    was a place where my dreams found their roots. The teachers
                    weren't just educators, they were the architects of my
                    aspirations, and each classroom was a canvas for endless
                    possibilities. Today, as I navigate the challenges of a
                    software career, I can't help but attribute my success to
                    the solid foundation laid in these classrooms. The
                    friendships, the laughter, and the lessons learned here have
                    been my guiding stars. So to all you amazing students,
                    embrace every moment of your school journey. These moments
                    are building blocks for your success story. It's shaping the
                    incredible chapters of your future success. Finally, a
                    heartfelt thank you to everyone for giving me the
                    opportunity to share my school journey with you and I'm so
                    grateful for the chance to reminisce about those awesome
                    moments.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini6} alt=""></img>
                  <p>
                    A. Dawn Thivakar<span>(SOFTWARE ENGINERRING )</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    “My first step of journey started in this school as an LKG
                    student.Each and Every year curved me into a better person
                    with so much of knowledge and discipline.I’ve never had the
                    pressure to study as the teachers were very supportive and
                    helpful.Amidst studies, there were lot more extra-curricular
                    activities that kept me engaged with other useful aspects.
                    Once after nearing public exams,all the teachers and staffs
                    were very particular in training and motivating us.We always
                    had the constant urge to learn and excel in this school,that
                    made me score 497/500 during 10th finals and 1135/1200
                    during 12th finals.Because of that,I did my under-graduation
                    in a well known Government university TNAU,that assisted me
                    to prepare for government exams.Today I succeeded in my
                    career as an Assistant Engineer in Agricultural Engineering
                    Department. I proudly say this is all because of strong
                    foundation-SFS”
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini7} alt=""></img>
                  <p>
                    V. Shameem Banu, B.Tech
                    <span>(ASSISTANT ENGINERRING(AE) IN AGRICULTURE)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    SFS is such a place I wish I could go back to! It has left
                    an indelible imprint on my heart and that each and every
                    moment spent here, be it in or outside the classroom, will
                    be cherished for a lifetime. The place, the staff and the
                    administrative team have nurtured me with lots of love and
                    care and also at the same time guided me through every thick
                    and thin. I am so humbled and would not hesitate in saying
                    that, I am a part of SFS like SFS is a part of me." SFS has
                    enabled me to bring out my shrouded talent, to nurture and
                    groom myself in the arena of the competitive world. This has
                    really been an awesome feeling to be the part of such a
                    marvellous educational institution.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-img">
                  <img src={alumini8} alt=""></img>
                  <p>
                    S. Ajaykumar -BFSc
                    <span>(INSPECTOR OF FISHERIES,GOVT OF TN)</span>
                  </p>
                </div>
                <div className="test-cont">
                  <p>
                    Greetings, As an alumnus ,I'm proud to be a part of SFS. I'm
                    grateful for my dedicated teachers who impart not only
                    knowledge but also for shaping us in many aspects.As we
                    navigate the landscape of adulthood, let us carry with us
                    the lessons learned and the memories cherished from our time
                    at SFS. Let us remain connected, supporting one another as
                    we pursue our dreams and aspirations.Wishing the best for
                    the blossoming young buds as they embark on their journey.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more testimonial slides as needed */}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Achievements;
