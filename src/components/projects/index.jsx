import { useState } from 'react'

export default function Who(){
    const [value, setValue] = useState(""); 
    const [result, setResult] = useState(""); 
    
    function handleSubmit(e) { 
        e.preventDefault(); 
        setResult( 
            "Goodbye " +
                value + "! See you soon!" 
        ); 
    } 
    function handleChange(e) { 
        setValue(e.target.value); 
        setResult(""); 
    } 

    return(
        <>
        <div className='card-section'>
            <br></br><h3>Goodbye?</h3>
            <div>
                <form onSubmit = {handleSubmit}>
                    What is your name?
                    <input 
                    type = "text" 
                    id = "project_input" 
                    name = "project_input" 
                    placeholder = "fill me in" 
                    value={value} 
                    onInput={handleChange} required/>
                    <p></p>
                    <input type = "submit" id = "project_submit" name = "test" placeholder = "click me" />
                </form>
            </div>
            
        </div>
        <div>
            <p>{result}</p>
        </div>

        </>
    );
}