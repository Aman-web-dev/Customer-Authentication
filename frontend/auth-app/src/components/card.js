import React from "react";

const Card =(props)=>{



    return (
<>
<div   className="col-md-4 mb-4">

<div key={props.key} className="card" style={{"width": "18rem"}}>
  <div className="card-header" >
    
    UserName:   {props.userName}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Email:   {props.email}</li>
    <li className="list-group-item">Password:   {props.password}</li>
  </ul>
  <div className="btn-cont">
  <button type="button" onClick={props.onDelete} className="btn btn-danger my-2 mx-2">Delete</button>
  <button type="button" onClick={props.onEdit} className="btn btn-info my-2 mx-2">Edit</button>
  </div>
</div>
</div>


       
       
        </>
        )
};


export default Card;