import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleExtraSpacesClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById('myBox');
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }

  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');

  // text = "new text"       // wrong way to change the text
  // setText("new text")
  return (
    <>
    <div className='container' style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
