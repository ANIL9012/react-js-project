

import "./contact-us.css"

import Form from "../Components/My-form/form";
import Form2 from "../Components/My-form/form2";

function Contact(){
    return(
        <>
        <form>
        <input className="form-control form-control mb-2" type="text" placeholder="form-control-lg" aria-label="form-control-lg example"/>
        <input className="form-control mb-2" type="text" placeholder="Default input" aria-label="default input example"/>
        <input className="form-control form-control" type="text" placeholder="form-control-sm" aria-label="form-control-sm example"/>
        </form>

        <Form/>
        <Form2/>

        </>
    )
}

export default Contact;