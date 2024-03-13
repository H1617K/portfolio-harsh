import { Container } from "../Project/styles.ts";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
// import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      {/* <ScrollAnimation animateIn="flipInX"> */}
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://force-web-tech-protfolio.netlify.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Force Web Tech | Portfolio</h3>
              <p>
              ForceWebTech is a tech consulting company, specialized in building and integrating a wide range of web and mobile solutions. Our objective is to deliver robust, scalable, innovative, and quality solutions with strict deadlines in line with your business plans.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
              </ul>
            </footer>
          </div>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX"> */}
          {/* <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://chat-box-website.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chat-Box  - Made With  WhatsApp Showcase</h3>
              <p>
              "Chat-Box - Made With WhatsApp Showcase" is a platform or event where developers and designers demonstrate their creations or projects built using WhatsApp as a primary tool or platform. Participants might showcase various applications, bots, or integrations they've developed, highlighting the versatility and potential of using WhatsApp in different contexts. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div> */}
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX"> */}
          {/* <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://ecommerceshop-site.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Shop Now- ecommerce-website</h3>
              <p>
              An ecommerce shop site is an online platform where customers can browse, purchase, and sometimes even sell goods and services. These sites typically feature a wide range of products, organized into categories and searchable by keywords. They often include features such as product reviews, ratings, secure payment processing, and order tracking.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Firebase</li>
                <li>Redux</li>
              </ul>
            </footer> */}
          {/* </div> */}
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX"> */}
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/H1617K/wataniauto" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Watani Auto | Login & Register</h3>
              <p>
                GitHub Repositories for login and Register page with all react js and  redux functionalities. Also with Navigarion and firebase functionalities. simple login and register page for an automotive comApany in Watani Auto.
                </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Redux</li>
                <li>Firebase</li>               
              </ul>
            </footer>
          </div>
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  );
}