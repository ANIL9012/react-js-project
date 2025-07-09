import { useState } from "react"

import "./form.css"

function Form(){
    const [name,setName]=useState(" ")
    const [email,emailsetval]=useState("")
    const [password,passwordsetval]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`name :${name} 
email:${email} 
password:${password}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>

            <label>Enter your name:
            <input type='text' value={name} name="name" onChange={(e)=> setName(e.target.value)} /> 
            </label>

            
            <label>Enter your Email:
            <input type='email' value={email} name="email" onChange={(e)=> emailsetval(e.target.value)} /> 
            </label>

            
            <label>Enter your password:
            <input type='password' value={password} name="password" onChange={(e)=> passwordsetval(e.target.value)} /> 
            </label>

            <button type="submit">Submit </button>

        </form>
        </>
    )
}

export default Form;