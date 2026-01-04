import React, { useState } from "react";
import MenuList from "./menu-list";
import './style.css'

const MenuItems = ({ item }) => {
 // const [show, setShow] = useState(false);
 const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

 const handleToggleChildren =(getCurrentLabael)=>{
setDisplayCurrentChildren({...displayCurrentChildren, [getCurrentLabael]: !displayCurrentChildren[getCurrentLabael]})
 }
  return (
    <li >
      <div className='menu-item'>
<p>{item.label} </p>
{item.children && item.children.length? <span onClick={()=>handleToggleChildren(item.label)}>
  {displayCurrentChildren[item.label] ? '-':'+'}
</span> :null}
        {/* 
        {item.children && item.children.length ? 
        <span onClick={()=>setShow(!show)}>
          {!show? '+':'-'}
          </span>
        :null} */}
      </div>

      { item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItems;
