import React from "react";
import { Link } from "react-router-dom";


let data = [
  { id: 1, item: "item 1", description: "Description from item 1" },
  { id: 2, item: "item 2", description: "Description from item 2" },
  { id: 3, item: "item 3", description: "Description from item 3" }
]



const ListItem = ()=>{

    return <div>
<h1>List Item</h1>
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