import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setLogin, searchBook } from "../store/action";
import {useState,useEffect } from "react";


function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchKeyword, setSearchKeyword] = useState(false);
  const keywordHandle = (event) => {
    console.log(event.target.value);
    setSearchKeyword(event.target.value)
   
  };
 
  const searchButtonHandle = (event) => {
    console.log('search but');
    event.preventDefault();
    dispatch(searchBook(searchKeyword));
  
  };
  const logoutHandle = (event) => {
    event.preventDefault();
    localStorage.clear();
    dispatch(setLogin(false));
    history.push("/login");
  };
  const changePassHandle = (event) => {
    event.preventDefault();
    history.push("/changepassword");
  };
  const homeHandle = (event) => {
    event.preventDefault();
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#" onClick={homeHandle}>
          Sanodoc QRCode
        </a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"></ul>
        </div> */}
       
        <span className="navbar-text">
          <a
            className="nav-link"
            href="#"
            onClick={changePassHandle}
            tabindex="-1"
          >
           ChangePass
          </a>
        </span>
        <form className="d-flex search-navbar" onSubmit={searchButtonHandle}>
          <input
            className="form-control me-2"
            onChange={keywordHandle}
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <span className="navbar-text">
          <a className="nav-link" href="#" onClick={logoutHandle} tabindex="-1">
            Logout
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
