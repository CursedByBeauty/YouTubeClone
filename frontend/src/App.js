// General Imports
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { KEY } from "./localKey";
import VideoPage from "./components/VideoPage";


function App() {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getAllVideos()
  },[])
  async function getAllVideos(){
    try {
      let request = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=tloufactions&type=video&part=snippet&key=${KEY}&maxResults=8`)
      setVideos(request.data.items)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <Navbar setVideos={setVideos} getAllVideos={getAllVideos} videos={videos} />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} user={user} token={token} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:videoId/" element={<VideoPage videos={videos} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
