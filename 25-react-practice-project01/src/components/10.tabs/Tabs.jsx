import React, { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

function handleClick(getCurrentIndex){
setCurrentTabIndex(getCurrentIndex)
onChange(getCurrentIndex)
}
  return (
    <div className="wrapper bg-amber-400 flex flex-col">
      <div className="heading  flex gap-2  mb-5 ">
        {tabsContent.map((tabItem,index) =>  (
            <div onClick={()=>handleClick(index)} key={tabItem.label}>
              <span className={`label ${currentTabIndex===index ? 'bg-green-600': 'bg-green-200'} p-2 cursor-pointer`}>{tabItem.label}</span>
            </div>
          )
        )}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};



export default Tabs;
