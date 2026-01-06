import React from 'react'
import Tabs from './Tabs'
function RandomComponent (){
    return <h1>Some random Component</h1>
  }

const TabTests = () => {
  
  const tabs = [
    {
      label: 'Tab 01',
      content: 'This is from tab 01'
    },
    {
      label: 'Tab 02',
      content: 'This is from tab 02'
    },
    {
      label: 'Tab 03',
      content: <RandomComponent/>
    }
  ]
 function handleChange(currentTabIndex){
  console.log(currentTabIndex);
  
 }
  return <Tabs tabsContent ={tabs}
   onChange = {handleChange}
   />
}

export default TabTests
