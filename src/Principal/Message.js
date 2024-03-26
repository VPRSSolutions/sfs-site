import "./Message.css"
import prins from "../images/kinder12.jpg";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Message = () => {
  return (
    <div>
      <div>
      <Navbar/>
        <div className="prinsss" style={{textAlign:"center", marginTop:"20px"}}>
            <h1 data-aos="fade-up-right">
              Our Principal's Message
              </h1>
        </div>
         <div className="principals-container">
        <div  data-aos="fade-up"
     data-aos-duration="2000" className="right-principall">
          <div>
          <h1>Fr.J.B. John Thadews MSFS</h1>
            <h3 style={{textAlign:"center"}}>Love Oneself</h3>
            <p>
<b>Dear Desalites,</b><br></br><br></br>
Jesus gives the following commandment as the second greatest one to be  followed in ones life, <b>“Love your neighbor as you love yourself”</b> (Matthew 22:37–39).</p><br></br>
<p>Many of us have read and heard variety of messages about self-love and how to cultivate it. We have been told by many motivational speakers that we “can't expect anyone to love us until we learn to love ourselves.” But for many of those who've experienced childhood trauma, difficult relationships, or any other painful experiences, learning to love oneself may not be as easy as it is said.</p><br></br>
<p>Self-love is actually a skill one can develop — much like self-confidence or self-trust. </p><br></br>
<p>Self-love means that you have an appreciation, affinity, and positive regard for yourself. It’s closely related to self-esteem and self-compassion. When you have a strong sense of self-love, you understand your own value and treat yourself in a loving way. Loving yourself means having a good understanding of both your strengths and weaknesses. Self-love helps to develop a positive effect on your well-being, mental fitness, and your relationships.</p><br></br>
<p>Self-love is critical to our overall well-being. Many studies suggest that we need self-love in order to take action, take chances, and take on new opportunities.</p><br></br>
<p>Self-love helps us take care of ourselves, lower stress, and strive for success. But it also protects us from negative thoughts, self-sabotage, and pushing ourselves too far. </p><br></br>
<p>Dear Desalites, learn to appreciate yourself and have positive regard for yourself.</p><br></br><br></br>

<b>Anbudan,</b><br></br>
Fr.J.B. John Thadews MSFS.
          </div>
        </div>
        <div className="left-principall">
          <img src={prins} alt=""></img>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Message