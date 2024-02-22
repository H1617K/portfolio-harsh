import { Container } from "../About/styles.ts";
// import HarshPhoto from "../../assets/HarshPhoto.png";
import HarshPic from '../../assets/HarshPic.png'
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
// import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        {/* <ScrollAnimation animateIn="fadeInLeft"> */}
          <h2>About me</h2>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}> */}
          <p>
          "Hey there! I'm Harsh, a seasoned website developer driven by a passion for crafting bespoke online experiences. Armed with expertise in HTML, CSS, JavaScript, and React, I possess the essential tools to actualize any website concept with finesse.
          </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}> */}
          <p>
          Yet, my offerings extend beyond mere development; I excel in harnessing CMS platforms like WordPress and Shopify, empowering clients to seamlessly manage and update their own websites.
          </p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}> */}
          <p>
          Whether you're seeking a fresh website or aiming to breathe new life into your existing digital presence, I'm here to collaborate and turn your website aspirations into tangible reality. Let's join forces and transform your vision into an exceptional online journey!"
          </p>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}> */}
          <h3>Here are my main skills:</h3>
        {/* </ScrollAnimation> */}
        <div className="hard-skills">

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}> */}
              <img src={reactIcon} alt="React" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}> */}
              <img src={typescriptIcon} alt="Typescript" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}> */}
              <img src={nodeIcon} alt="Node" /> 
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}> */}
              <img src={htmlIcon} alt="Html" />
            {/* </ScrollAnimation> */}
          </div>

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}> */}
              <img src={cssIcon} alt="Css" />
            {/* </ScrollAnimation> */}
          </div>

          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}> */}
              <img src={boostrapIcon} alt="bootstrap" />
            {/* </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}> */}
              <img src={jsIcon} alt="JavaScript" />
            {/* </ScrollAnimation> */}
          </div>
        </div>
      </div>
      <div className="about-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}> */}
          <img src={HarshPic} alt="Hars Raval" />
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  )
}
