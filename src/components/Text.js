import React, { useState } from 'react'
import copy from "copy-to-clipboard";
export default function Text( props) {
  
 // function call
const click = () =>
 {
   let newText= text.toUpperCase();
    setText(newText)
   props.showAlert("text converted to uppercase","success");
 }
 const click2 = () =>
 {
   let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("text converted to lowercase","success");
 }
 const click3 = () =>
 {
   
    setText('')
   props.showAlert("text is clear","success");
 }
 const click4 = () =>
 {
   copy(setText);
   alert("message copied to the clipboard" );
 }
  // function call
const handleOnChange = (event) =>
{
  //console.log('hello');
   setText(event.target.value)
}
 //useState
 const [text,setText] = useState('');
  return (
    <>   
   <div className="container" style={{color : props.mode==='dark'? 'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea  className="form-control"  value={text}  
  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white'}} 
  id="myBox" rows="8"></textarea>
  <br/>
 <button className='btn btn-primary' onClick={click}> Change to upper case </button>
 <button className='btn btn-primary mx-2' onClick={click2}> Change to lower case </button>
 <button className='btn btn-primary mx-2' onClick={click3}> Clear text </button>
 <button className='btn btn-primary mx-2' onClick={click4}> Copy text to clipboard </button>
 <p>{text.length}</p>
 <h2>Preview</h2>
 <p>{text.length > 0 ?text : "Enter text above to preview"}</p>
</div>
  </div>
  </>
  )
}
