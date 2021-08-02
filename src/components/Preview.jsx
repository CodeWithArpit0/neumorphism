import { useContext } from "react";
import updatePreviewDesign from "../hooks/useUpdatePreviewDesign";
import { DesignDetailsContext } from "../App";

function Preview() {
  const { updateAngel } = useContext(DesignDetailsContext);
  updatePreviewDesign();

  return (
    <>
      {/* Design Preview */}
      <div id="shadow-adjust-box" className="flex">
        <div className="flex" id="light-btn-container">
          <span
            id="top-left"
            className="light-side active-side"
            onClick={(e) => updateAngel(145, e.target.id)}
          ></span>
          <span
            id="top-right"
            className="light-side "
            onClick={(e) => updateAngel(225, e.target.id)}
          ></span>
        </div>

        <div id="preview-container" className="flex">
          <div id="preview"></div>
        </div>

        <div className="flex" id="light-btn-container">
          <span
            id="bottom-left"
            className="light-side "
            onClick={(e) => updateAngel(45, e.target.id)}
          ></span>
          <span
            id="bottom-right"
            className="light-side "
            onClick={(e) => updateAngel(315, e.target.id)}
          ></span>
        </div>
      </div>
      {/* Design Preview */}
    </>
  );
}

export default Preview;
