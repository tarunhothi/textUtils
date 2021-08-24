import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("UpperCase was Clicked!" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Conerted to UpperCase", "success")
    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Conerted to LowerCase", "success")
    }

    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("succefully cleared text", "success")
    }

    const handleCapitalizedClick = () => {
        let arr = text.split(" ");
        for(let i=0; i<arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        let newText = arr.join(" ");
        setText(newText)
        props.showAlert("Conerted to capitalized form", "success")
    }

    const handleAlternativeClick = () => {
        let chars = text.toLowerCase().split("")

        for(let i = 0; i< chars.length; i += 2){
            chars[i] = chars[i].toUpperCase();
        }
        let newText = chars.join("")
        setText(newText)
        props.showAlert("Conerted successfully", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Successfully removed extra space", "success")
    }

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.headings}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value ={text} onChange= {handleOnChange} id="myBox" rows="8" style={{background: props.mode === 'dark' ? '#385c7a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCapitalizedClick}>Capitalized Case</button>
            <button className="btn btn-primary mx-1" onClick= {handleAlternativeClick}>Alternative Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text=== ''? 0: text.trim().split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: "Enter something to preview here!"}</p>
        </div>
        </>
    )
}
