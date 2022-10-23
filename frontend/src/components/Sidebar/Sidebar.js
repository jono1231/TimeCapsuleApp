import './Sidebar.css';
import React, {useState} from 'react';
import SidebarModule from './SidebarModule';
import sidebarData from './sidebarData';

export default function Sidebar() {


  const [sidebar, setSidebar] = useState(sidebarData.data);
  //use setFeedBoxes when pulling from database
  
  
  
  let sidebarElements = sidebar.map(sidebarElement => (
    <SidebarModule 
      key={sidebarElement.id}
      img={sidebarElement.img}
      moduleName={sidebarElement.moduleName}
    />
  ));

    return (
      <div className = "sidebar">
        {sidebarElements}
      </div>
    )

}
