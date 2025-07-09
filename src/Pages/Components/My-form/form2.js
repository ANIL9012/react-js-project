import { useState } from "react";

function Form2() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechage = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(alert("Form Sumited"));
    console.log("Submit data", values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Enter your name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => handlechage(e)} value={values.name}
        >
        </input>

        <label> Enter your Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => handlechage(e)}
        >
        </input>

        
        <label> Enter your password</label>
        <input
          type="password"
          name="password" value = {values.password}
          onChange={(e) => handlechage(e)}
        >
        </input>
        <button type="submit"> Submit</button>
      </form>
    </>
  );
}

export default Form2;