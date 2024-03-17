import React, { useEffect, useState } from 'react'
import { setClientToken } from '../../Spotify.js'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Player from "../Player/Player.jsx"
import Fav from '../Fav/Fav.jsx'
import Library from '../Library/Library.jsx'
import Feed from '../Feed/Feed.jsx'
import Trending from '../Trending/Trending.jsx'
import Login from '../Auth/Login/Login.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'

function Home() {
    const [token, setToken] = useState("")

useEffect(() => {
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash;
      
      window.location.hash = "";
      if (!token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
        setClientToken(_token);
      } else {
        setToken(token);
        setClientToken(token);
      }
    }, []);

  return !token ?(
    <Login/>) :
    ( <Router>
      <div className="main-body">
        <Sidebar/>
        <Routes>
      <Route path="" element={<Login />}/>
      <Route path="player" element={<Player/>}/>
      <Route path="library" element={<Library/>}/>
      <Route path="feed" element={<Feed/>}/>
      <Route path="fav" element={<Fav/>}/>
      <Route path="trending" element={<Trending/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Home
