import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  function handleSearch() {
    let filteredVideos = props.videos.filter((currentVideo) => {
      if (
        currentVideo.snippet.title.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      } else if (
        currentVideo.snippet.description
          .toLowerCase()
          .includes(search.toLowerCase())
      ) {
        return true;
      }
    });
    props.setVideos(filteredVideos);
    setSearch('')
    if (search === '') {
      props.getAllVideos()
    }
  }
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul style={{paddingLeft: 0}}>
        <li className="brand">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <h1>THE LAST OF US VIDEOS</h1>
          </Link>
        </li>
        <li>
          <input
          placeholder="  Search Here..."
          className="input-bar"
            value={search}
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          />{" "}
          <button onClick={()=> handleSearch()}>SEARCH</button>
        </li>

        <li>
          <button onClick={() => navigate("/")}>HOME</button>
          {user ? (
            <button onClick={logoutUser}>LOGOUT</button>
          ) : (
            <button onClick={() => navigate("/login")}>LOGIN</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
