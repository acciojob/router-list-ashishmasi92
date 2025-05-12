import React from "react";
import { Link } from "react-router-dom";


let data = [
  { id: 1, item: "Item 1", description: "Description from item 1" },
  { id: 2, item: "Item 2", description: "Description from item 2" },
  { id: 3, item: "Item 3", description: "Description from item 3" }
]



const ListItem = ()=>{

    return <div>
<h1>Item List</h1>
<ul>
{data.map((item)=>{
    return <li key={item.id} >
        <Link to={`/item/${item.id}`} >{item.item}</Link>
    </li>
})}

</ul>

    </div>
}
export default ListItem