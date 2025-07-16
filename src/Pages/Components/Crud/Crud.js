import { useState } from "react";


function Crud(){

    const [input, Setinput] = useState("")
    const name = "Anil"

    return(
        <>
        <h1>Crud</h1>
        <input type="text" name="name" id="" value={name} />
        <button type="button">Add</button>
        </>
    )
}

export default Crud;