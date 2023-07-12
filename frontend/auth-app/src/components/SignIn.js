import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function SignIn(props){

const [userName,setUserName]=useState(""||props.userName);
const [email,setEmail]=useState(""||props.email);
const [password,setPassword]=useState(""||props.password);
const [error,setError]=useState("");
const navigate =useNavigate();


console.log(userName,email,password)

const handleSubmit = async (e) => {
  e.preventDefault();

  const addUser = { userName, email, password };

  if (!userName || !email || !password) {
    setError("Please fill in all fields.");
    return;
  }

  
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });



    if (!response.ok) {
      const result = await response.json();
    const errorMessage = result.error || "An error occurred.";
    setError(errorMessage);
    console.log('this is error', errorMessage);

    } if(response.ok){
      setError("");
      setEmail("");
      setPassword("");
      setUserName("");
      console.log("User added successfully");
      navigate("/")
    } 
 
};
    return   (
        <>
        <form onSubmit={handleSubmit}>
        {error && (<div id="" className="alert d-absolute vh-10 vw-80 alert-danger" role="error">{error}</div>)}
        <div className="form-control container my-2 vh-50 vw-40 ">

<h2>Sign-up</h2>

        <div className="mb-3">
       
  <label  className="form-label">UserName</label>
  <input type="userName" className="form-control"
   placeholder="johndoe_345" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
</div>
        <div className="mb-3">
  <label  className="form-label">Email address</label>
  <input type="email" className="form-control"  
  placeholder="johndoe@example.com"value={email} onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className="mb-3">
  <label  className="form-label">Password</label>
  <input type="password" className="form-control" 
   placeholder="@q346781474uf" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button  className="btn btn-success">Success</button>

</div>
</form>

</>
)}
   
   
   export default SignIn;