import React from "react";
import { useParams } from "react-router-dom";

let obj = {
    "1": { id: 1, name: "item 1", description: "Description from item 1" },
    "2": { id: 2, name: "item 2", description: "Description from item 2" },
    "3": { id: 3, name: "item 3", description: "Description from item 3" },
}

const ListDetails = ()=>{

let {id} = useParams()
let value = obj[id]

if(!obj) return <h1>Item not found </h1>


    return (
        <>
        <h1>{value.name}</h1>
        <p>{value.description}</p>

        </>
    )
}

export default ListDetails