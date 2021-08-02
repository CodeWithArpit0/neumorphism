import { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FunctionContext } from "../App";
const neumorphism =
  "https://uxplanet.org/neomorphism-the-hottest-design-trend-in-2020-8bd65de77a5e?gi=81ab589e1548";

const Editor = () => {
  const { handleDesignDetails, updateClass, CssCode } =
    useContext(FunctionContext);

  const copyCssCode = () => {
    const copy = document.getElementById('copied');
    copy.classList.remove('slidedown');
    void copy.offsetWidth; // trigger reflow
    copy.classList.add('slidedown');
  };
  return (
    <>
    <div id="copied" className="flex">Copied to clipboard</div>

      <div id="editor" className="flex">
        <div id="color-option" className="flex">
          <span>Pick a color : </span>
          <input
            type="color"
            name="color"
            onChange={handleDesignDetails}
            defaultValue="#5900ff"
            id="color-selector"
          />
          <span>OR</span>
          <input
            type="text"
            name="color"
            onChange={handleDesignDetails}
            defaultValue="#5900ff"
            id="Hex-color"
            placeholder="#ffffff"
          />
        </div>

        <div id="range-selector">
          <div className="slide-container flex">
            <label htmlFor="Size">Size : </label>
            <input
              type="range"
              onChange={handleDesignDetails}
              name="size"
              max={270}
              min={10}
              step={1}
              defaultValue={240}
              className="slider"
              id="Size"
            />
          </div>
          <div className="slide-container flex">
            <label htmlFor="Radius">Radius : </label>
            <input
              type="range"
              onChange={handleDesignDetails}
              name="radius"
              max={130}
              min={0}
              step={1}
              defaultValue={50}
              className="slider"
              id="Radius"
            />
          </div>

          <div className="slide-container flex">
            <label htmlFor="Distance">Distance : </label>
            <input
              type="range"
              onChange={handleDesignDetails}
              name="distance"
              max={30}
              min={5}
              step={1}
              defaultValue={10}
              className="slider"
              id="Distance"
            />
          </div>

          <div className="slide-container flex">
            <label htmlFor="Intensity">Intensity : </label>
            <input
              type="range"
              onChange={handleDesignDetails}
              name="intensity"
              max={130}
              min={10}
              step={1}
              defaultValue={50}
              className="slider"
              id="Intensity"
            />
          </div>

          <div className="slide-container flex">
            <label htmlFor="Blur">Blur : </label>
            <input
              type="range"
              onChange={handleDesignDetails}
              name="blur"
              max={100}
              min={0}
              step={1}
              defaultValue={10}
              className="slider"
              id="Blur"
            />
          </div>
        </div>

        <div id="switch-container" className="flex">
          <label>Shape : </label>
          <button
            id="flat"
            onClick={(e) => updateClass(e.target.id)}
            className="shadow-mode-btn flat active"
            title="Flat"
          >
            Flat
          </button>
          <button
            id="concave"
            onClick={(e) => updateClass(e.target.id)}
            className="shadow-mode-btn concave"
            title="Concave"
          >
            Concave
          </button>
          <button
            id="convex"
            onClick={(e) => updateClass(e.target.id)}
            className="shadow-mode-btn convex"
            title="Convex"
          >
            Convex
          </button>
          <button
            id="pressed"
            onClick={(e) => updateClass(e.target.id)}
            className="shadow-mode-btn pressed"
            title="Pressed"
          >
            Pressed
          </button>
        </div>
        <div id="code-container">
          <pre>
            <code id="code">{CssCode}</code>
          </pre>
        </div>

        <CopyToClipboard onCopy={copyCssCode} text={CssCode}>
          <button id="copy-btn" title="Copy CSS Code">
            Copy
          </button>
        </CopyToClipboard>

        <div id="more-info-heading" className="flex">
          <h4 id="read-more">
            Read more about <a href={neumorphism}>Neumorphism</a>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Editor;
