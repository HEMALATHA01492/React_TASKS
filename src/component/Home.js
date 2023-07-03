import React from 'react';
import SideBar from '../component of home/SideBar';
import TopBar from '../component of home/TopBar';



function Home(props) {
    const {data}=props

  return (
    <div id="wrapper">
    <SideBar />
    <TopBar data={data}/>
     
    </div>
  )
}

export default Home;
