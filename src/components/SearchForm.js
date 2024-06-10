import React, { useState } from "react";
export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");

  }
  const handleLoClick = () => {
    // console.log("Lowercase was Clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");

  }
  const handleClearClick = () => {
    // console.log("cleartext was Clicked:" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
      // console.log("Remove extra space was Clicked:" + text);


  const handleExtraSpaces = () => {

        // console.log("Extra space remove was Clicked:" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }    
  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Extra spaces Removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"
            value={text}
            onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#000' : 'white', color:props.mode === 'dark' ? 'white' : 'black' }} id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra spaces
          </button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleClearClick}> Clear text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it."}</p>
      </div>
    </div>
  );
}
