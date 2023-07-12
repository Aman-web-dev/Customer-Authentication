import React, { useState } from "react";

function LogIn(){

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
  
    





 return   (
    <>
    <form onSubmit={""}> 
        
        
        
    <div className="form-control container my-2 vh-50 vw-40 " >

<h2>Sign-up</h2>

    <div className="mb-3"  >
   
<label  className="form-label">UserName Or Email</label>
<input type="userName" className="form-control"
placeholder="johndoe_345" value={userName} onChange={(e)=>{setuserName(e.target.value)}} />
</div>
   
<div className="mb-3">
<label  className="form-label">Password</label>
<input type="password" className="form-control" 
placeholder="@q346781474uf" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>
</div>

<button  className="btn btn-success">Log-In</button>

</div>
</form>

</> 
)}


export default LogIn;