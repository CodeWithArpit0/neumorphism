
//Coffee Logo
import CoffeeLogo from '../coffee.svg';
const Header = () => {
  return (
    <>
      <header>
        <div id="header" className="flex">
          <div id="logo-box">
            <h1 id="main-logo-heading">Neumorphism</h1>
            <h1 id="secondry-heading">
              Generate Soft UI <b>CSS Shadow</b>
            </h1>
          </div>
          
          <div id="header-buy-me-a-coffee">
              <a
                href="https://www.buymeacoffee.com/arpitsaxena"
                target="_blank" rel="noreferrer"
                className="coffee-btn coffee-button flex"
              ><img src={CoffeeLogo} alt="Coffee logo"/> <span>Buy me a coffee</span></a>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
