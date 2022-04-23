import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('Enter Text Here');

    const upperCase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "Success")
    }
    const lowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "Success")
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared", "Success")
    }
    const UpperOnchnage = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='container'>
                    <h1>{props.heading} Below</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={UpperOnchnage} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="mybox" rows="8"></textarea>

                        <button className='btn btn-primary mx-2 my-5' onClick={upperCase}>Convert to Uppercase</button>
                        <button className='btn btn-primary mx-2 my-5' onClick={lowerCase}>Convert to Lowercase</button>
                        <button className='btn btn-primary mx-2 my-5' onClick={clearText}>Clear Text</button>

                    </div>
                </div>
                <div className='container my-5'>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").length} words {text.length} charcters</p>
                    <p>{text}</p>
                </div>
            </div>
        </>


    )
}
