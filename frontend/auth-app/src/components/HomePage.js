
import React, { useEffect, useState } from "react";
import Card from './card'
import { Navigate, useNavigate } from "react-router-dom";




function HomePage(){


const  navigate = useNavigate();
    const [data,setData]=useState([])


    const handleEdit=async(id)=>{
    
     navigate(`/:${id}`)
    
    }

    const  handleDelete=async(id)=>{

        console.log(id);
        const response= await fetch(`http://localhost:5000/${id}`,{
            method: "DELETE",
        });


        const result = response.json();
        
        if (!response.ok) {
            const result = await response.json();
          const errorMessage = result.error || "An error occurred.";
          console.log('this is error', errorMessage);
      
          } if(response.ok){
            console.log("User data deleted successfully");
            fetchData();
            
          } 

        
      }

    async  function fetchData(){

    const response = await fetch("http://localhost:5000")

    const result = await  response.json();

    if (!response.ok) {
        const result = await response.json();
      const errorMessage = result.error || "An error occurred.";
      console.log('this is error', errorMessage);
  
      } if(response.ok){
        console.log("User data fetched successfully");
        setData(result);
      } 
}





useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

    return(
        <div className="container ">
      <div className="row">
      {data.map((elem)=>(
        <Card key={elem._id} userName={elem.userName} onDelete={()=> handleDelete(elem._id)} email={elem.email} onEdit={()=> handleEdit(elem._id)} password={elem.password}/>
    ))}
        </div>
      </div>

    );
};


export default HomePage;