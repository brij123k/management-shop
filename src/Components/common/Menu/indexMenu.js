import React from 'react'
import './indexMenu.css'
// import { menuItemsData } from './data'
import MenuItem from './MenuItem'


const Menu = ({list}) => {         
  return (
    <main>
      {list.map((item)=>(      //idr list ko as a pros pass kiya hai 
      <MenuItem key={item.id} item={item}/>
      ))}

     
    </main>
  )
}

export default Menu


 /* const Menu =()=>{   
    return(
      <main>
      {menuItemData.map(item)=> // idr direct menueItem ko pass kiya hai menu ke data se 
      <MenueItem key={item.id} item={item}/>
      }
      </main>
    ) 
 }
*/
 