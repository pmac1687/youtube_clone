import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <NavBar />
      <div style={{ height: '88vh' }} className='w-screen  flex'>
        <SideBar />
        <div className='w-3/4 bg-blue-200'>
          <VideoPlayer />
          <VideoList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
