import {
  useContext
} from "react";
import {
  DesignDetailsContext,
} from "../App";
import colorGen from "./colorGen";


// Root of the document
const root = document.documentElement;

const useUpdatePreviewDesign = () => {

  const {
    DesignDetails,
    updateCSSCode
  } = useContext(DesignDetailsContext);
  let {
    color,
    size,
    radius,
    distance,
    intensity,
    blur,
    shadowMode,
    angle
  } = DesignDetails;

  // root.style.setProperty("--preview-color", color);
  root.style.setProperty("--main-color", color);

  // Setting WIDTH, HEIGHT AND RADIUS
  root.style.setProperty("--preview-width", size + "px");
  root.style.setProperty("--preview-height", size + "px");
  root.style.setProperty("--preview-radius", radius + "px");

  // Variables to store essential the values
  let positionX, positionY, positionXOpposite, positionYOpposite;

  // Distance of the shadow from the main container
  positionX =
    positionY =
    positionXOpposite =
    positionYOpposite =
    distance + "px";

  // Variable to store shadow and color value of preview
  let shadow, lightShadow, darkShadow,
    lightColor,
    darkColor,
    backgroundColor = color;
  blur = blur + "px";

  // Generating the Dark and Light color for the shadow
  lightColor = colorGen(color, parseInt(intensity));
  darkColor = colorGen(color, -parseInt(intensity));


  switch (angle) {
    case 145:
      lightShadow = `${positionX} ${positionY} ${blur} ${darkColor}`;
      darkShadow = `-${positionXOpposite} -${positionYOpposite} ${blur} ${lightColor}`;
      shadow = `${lightShadow},
              ${darkShadow}`;
      break;
    case 225:
      lightShadow = `-${positionX} ${positionY} ${blur} ${darkColor}`;
      darkShadow = `${positionXOpposite} -${positionYOpposite} ${blur} ${lightColor}`;
      shadow = `${darkShadow},
              ${lightShadow}`;
      break;
    case 315:
      lightShadow = `-${positionX} -${positionY} ${blur} ${darkColor}`;
      darkShadow = `${positionXOpposite} ${positionYOpposite} ${blur} ${lightColor}`;
      shadow = `${lightShadow},
              ${darkShadow}`;
      break;
    case 45:
      lightShadow = `${positionX} -${positionY} ${blur} ${darkColor}`;
      darkShadow = `-${positionXOpposite} ${positionYOpposite} ${blur} ${lightColor}`;
      shadow = `${lightShadow},
              ${darkShadow}`;
      break;
    default:
      lightShadow = `${positionX} ${positionY} ${blur} ${darkColor}`;
      darkShadow = `-${positionXOpposite} -${positionYOpposite} ${blur} ${lightColor}`;
      shadow = `${lightShadow},
              ${darkShadow}`;
      break;
  }

  root.style.setProperty("--preview-background", color);

  if (shadowMode === "concave") {
    darkColor = colorGen(color, -parseInt(18));
    lightColor = colorGen(color, parseInt(18));
    backgroundColor = `linear-gradient(${angle}deg, ${darkColor}, ${lightColor})`;
  } else if (shadowMode === "convex") {
    darkColor = colorGen(color, -parseInt(18));
    lightColor = colorGen(color, parseInt(18));
    backgroundColor = `linear-gradient(${angle}deg, ${lightColor}, ${darkColor})`;
  } else if (shadowMode === "pressed") {
    // shadow = `inset ${positionX} ${positionY} ${blur} ${darkColor},
    //           inset -${positionXOpposite} -${positionYOpposite} ${blur} ${lightColor}`;
    lightShadow = `inset `.concat(lightShadow);
    darkShadow = `inset `.concat(darkShadow);

    switch (angle) {
      case 145:
        shadow = `${lightShadow},
                ${darkShadow}`;
        break;
      case 225:
        shadow = `${darkShadow},
                ${lightShadow}`;
        break;
      case 315:
        shadow = `${lightShadow},
                ${darkShadow}`;
        break;
      case 45:
        shadow = `${lightShadow},
                ${darkShadow}`;
        break;
      default:
        shadow = `${lightShadow},
                ${darkShadow}`;
    }
  }

  // Updating the box-shadow or preview
  root.style.setProperty("--preview-shadow", shadow);
  root.style.setProperty("--preview-background", backgroundColor);

  let code = `border-radius: ${radius}px;
background: ${backgroundColor};
box-shadow: ${shadow};`;

  updateCSSCode(code);

};

export default useUpdatePreviewDesign;