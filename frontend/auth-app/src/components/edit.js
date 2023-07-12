import React,{useState} from "react";

import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const EditWindow = (props) => {


const [userName,setUserName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const navigate =useNavigate();


const {id}=useParams()
console.log(id)

    const edit = async (id) => {
     

        const response = await fetch(`http://localhost:5000/${id}`)

        const result = await  response.json();

        if(response.ok){
            console.log("data",result)
        setEmail(result.email);
        setPassword(result.password);
        setUserName(result.userName);
        console.log(email,password,userName);
    }
 }

 
const handleSubmit = async (id) => {

  console.log(id)
    const updateUser = { userName, email, password };
    console.log(updateUser)
  
    if (!userName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updateUser),
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
        setError("")
      navigate("/")


      } }
 
useEffect(()=>{
    edit(id.substring(1));
},[]);

        return (

            <>
                <form onSubmit={(e)=>{e.preventDefault();
                    handleSubmit(id.substring(1))}}>
                    {error && (<div id="" className="alert d-absolute vh-10 vw-80 alert-danger" role="error">{error}</div>)}
                    <div className="form-control container my-2 vh-50 vw-40 ">

                        <h2>Edit</h2>

                        <div className="mb-3">

                            <label className="form-label">UserName</label>
                            <input type="userName" className="form-control"
                                placeholder="johndoe_345" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control"
                                placeholder="johndoe@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                placeholder="@q346781474uf" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button className="btn btn-success">Success</button>

                    </div>
                </form>

            </>
        )
        }

    

export default EditWindow;