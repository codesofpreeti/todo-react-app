import React, { useState } from 'react'

const ToDoInput = (props) => {
    const [inputText, setInputText] = useState("");
    const handleEnterButton = (e) =>{
        if(e.keyCode===13){
            props.addList(inputText)
             setInputText("")
        }
    }
    return (
        <div className='input-container'>
            <input type="text" className='input-box-todo' placeholder='enter task' value={inputText} onChange={e => {
                setInputText(e.target.value)
            }} onKeyDown={handleEnterButton}/>
            
            <button className='add-btn'
                onClick={() => {
                    props.addList(inputText)
                    setInputText("")
                }}>+</button>

        </div>
    )
}

export default ToDoInput