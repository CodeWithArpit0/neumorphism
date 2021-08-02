// Importing icons
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

//Coffee Logo
import CoffeeLogo from "../coffee.svg";

// Social Media links
const Instagram = "https://www.instagram.com/code.with.arpit/";
const Facebook = "https://www.facebook.com/shorya.srivastv";
const Linkdin = "https://www.linkedin.com/in/arpit-saxena-a756a4215/";

// Github link
const Github = "https://github.com/CodeWithArpit0/neumorphism";

// Website link
const WebsiteLink = "https://CodeWithArpit0.github.io/neumorphism";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer" className="flex">
          <div id="left-content" className="flex">
            <div id="footer-logo">
              <a href={WebsiteLink} target="_blank" rel="noreferrer">
                <h1 id="primary-heading">Neumorphism</h1>
              </a>
              <h3 id="secondry-heading">
                Generate Soft UI <b>CSS Shadow</b>
              </h3>
            </div>

            <div id="github-link">
              <h4 id="github-heading">
              Give us stars on{" "}
              <a href={Github} target="_blank" rel="noreferrer">
              <AiFillGithub id="github" />
                  Github
                </a>
              </h4>
            </div>

            <div id="social-media-handles" className="flex">
              <a
                href={Instagram}
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <AiOutlineInstagram className="icon-style" />
              </a>
              <a
                href={Facebook}
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <GrFacebookOption className="icon-style" />
              </a>
              <a
                href={Linkdin}
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <FaLinkedinIn className="icon-style" />
              </a>
            </div>
          </div>

          <div id="right-content" className="flex">
            <h1 id="support-heading">Show your support</h1>
            <div id="buy-me-a-coffee">
              <a
                href="https://www.buymeacoffee.com/arpitsaxena"
                target="_blank"
                rel="noreferrer"
                className=" coffee-btn flex"
              >
                <img src={CoffeeLogo} alt="Coffee logo" />{" "}
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
