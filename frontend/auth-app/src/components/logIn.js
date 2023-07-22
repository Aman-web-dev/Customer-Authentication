import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';




function LogIn() {

    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("")

    const navigate =useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault();

        const addUser = { userName, password };


        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json",
            },
        });



        if (!response.ok) {
            const result = await response.json();
            const errorMessage = result.error || "wrong Credentials.";
            setError(errorMessage);
            console.log('this is error', errorMessage);

        } if (response.ok) {

            setuserName('');
            setpassword("")
            

           alert("login Successfull")
           console.log(response);
            console.log("LogIn successFull");
            navigate("/")
        }
    }






return (
    <>
        <form onSubmit={handleSubmit}>
        {error && (<div id="" className="alert d-absolute vh-10 vw-80 alert-danger" role="error">{error}</div>)}

            <div className="form-control container my-2 vh-50 vw-40 " >

                <h2>Log-In</h2>

                <div className="mb-3"  >

                    <label className="form-label">UserName Or Email</label>
                    <input type="userName" className="form-control"
                        placeholder="johndoe_345" value={userName} onChange={(e) => { setuserName(e.target.value) }} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"
                        placeholder="@q346781474uf" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </div>

                <button className="btn btn-success">Log-In</button>

            </div>
        </form>

    </>
)}


export default LogIn;