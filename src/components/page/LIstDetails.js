import React from "react";
import { useParams } from "react-router-dom";

let obj = {
    "1": { id: 1, name: "Item 1", description: "Description for Item 1" },
    "2": { id: 2, name: "Item 2", description: "Description for Item 2" },
    "3": { id: 3, name: "Item 3", description: "Description for Item 3" },
}

const ListDetails = ()=>{

let {id} = useParams()
let value = obj[id]

if(!value) return <h1>Item not found </h1>


    return (
        <>
        <h1>{value.name}</h1>
        <p>{value.description}</p>

        </>
    )
}

export default ListDetails