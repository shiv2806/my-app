import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        console.log("on change triggered");   
    }

    const handleLowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower Case","success")

    }

    const handleClearClick = () =>{
        setText('');
        props.showAlert("Txt Cleared","success")

    }
    const handleCopy = () =>{
        var text  = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")

    }
    const handleSpaces = () => {
        let myText = text.split(/[ ]+/)
        setText(myText.join(" "));
        props.showAlert("Spaces Removed","success")

    }


    const [text,setText] = useState('Enter the text');
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black' }}>
        <div className="mb-3">
            <h3>{props.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" value={text} onChange={handleOnChange}>
                </textarea>
            </div>
            <div className="container">
            <button className='btn btn-primary mr-3' onClick={handleOnClick}>to Upper-Case</button>
            <button className='btn btn-primary mr-3' onClick={handleLowCase}>to lower-Case</button>
            <button className='btn btn-primary mr-3' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mr-3' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mr-3' onClick={handleSpaces}>Remove Extra Spaces</button>


            </div>


        </div>

        <div className="container">
            <h2>Your text util summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
    </>
  )
}
