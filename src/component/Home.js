import React from 'react';
import SideBar from '../component of home/SideBar';
import MainBar from '../component of home/MainBar';



function Home(props) {
    const {data}=props;

  return (
    <div id="wrapper">
    <SideBar />
    <MainBar data={data}/>
     
    </div>
  )
}

export default Home;
