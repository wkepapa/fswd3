import React from "react";
export default function Card({name,message}){
return(
<div className="formcard">
    <h2>
        {name}
    </h2>
    <p>{message}</p>
</div>
);
}