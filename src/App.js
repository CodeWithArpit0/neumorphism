import { useState, createContext } from "react";
// Importing page components
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import Footer from "./components/Footer";

export const DesignDetailsContext = createContext();
export const FunctionContext = createContext();

function App() {
  const initialCssCode = `border-radius: 50px;
  background: #55b9f3;
  box-shadow: 20px 20px 60px #489dcf,
            -20px -20px 60px #62d5ff;`;

  const [CssCode, setCssCode] = useState(initialCssCode);

  const [DesignDetails, setDesignDetails] = useState({
    color: "#0a50ff",
    size: "240",
    radius: "50",
    distance: "10",
    intensity: "50",
    blur: "10",
    shadowMode: "flat",
    angle: 145,
  });

  // Function to handle(Store) the design details in state variable as an object
  const handleDesignDetails = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (fieldName === "color") {
      const RegX = /^#([0-9A-F]{3}){1,2}$/i;
      if (RegX.test(fieldValue) === false) return;
      const colorHandle = document.getElementsByName(fieldName);
      colorHandle[0].value = colorHandle[1].value = fieldValue;
    }
    setDesignDetails({ ...DesignDetails, [fieldName]: fieldValue });
  };

  const updateClass = (buttonID) => {
    const shadowBtns = document.getElementsByClassName("shadow-mode-btn");
    for (let i = 0; i < shadowBtns.length; i++)
      shadowBtns[i].classList.remove("active");

    document.getElementById(buttonID).classList.add("active");
    setDesignDetails({ ...DesignDetails, shadowMode: buttonID });
  };

  const updateCSSCode = (code) => {
    setCssCode(code);
  };

  const updateAngel = (angle, activeButtonID) => {
    const lightBtns = document.getElementsByClassName("light-side");
    for (let i = 0; i < lightBtns.length; i++)
      lightBtns[i].classList.remove("active-side");

    document.getElementById(activeButtonID).classList.add("active-side");
    setDesignDetails({ ...DesignDetails, angle });
  };
  return (
    <div className="App">
      <div id="neumorphism-app" className="flex">
        <DesignDetailsContext.Provider
          value={{ DesignDetails, updateCSSCode, updateAngel }}
        >
          {/* Design Preview  */} <Preview /> {/* Design Preview  */}{" "}
        </DesignDetailsContext.Provider>
        <FunctionContext.Provider
          value={{ handleDesignDetails, updateClass, CssCode }}
        >
          {/* Design Editor  */} <Editor /> {/* Design Editor  */}{" "}
        </FunctionContext.Provider>{" "}
      </div>
      {/* Design Editor  */} <Footer /> {/* Design Editor  */}{" "}
    </div>
  );
}

export default App;
