import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaPlay,FaGripfire,FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../Spotify';
function Sidebar() {

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
   <>
   <div className="sidebar-container">
  <img src={image} alt="profile"
  className='profile-img'
  />

   <div>

    <SidebarButton tittle ="Feed" to ="/feed" icon={<MdSpaceDashboard/>} />
    <SidebarButton tittle ="Trending" to ="/trending" icon={<FaGripfire/>} />
    <SidebarButton tittle ="Player" to ="/player" icon={<FaPlay/>} />
    <SidebarButton tittle ="Fav" to ="/fav" icon={<MdFavorite/>} />
    <SidebarButton tittle ="Library" to ="/library" icon={<IoLibrary/>} />

   </div>
   <SidebarButton tittle ="Sign Out" to ="" icon={<FaSignOutAlt/>} />

   </div>

   </>
  )
}

export default Sidebar
