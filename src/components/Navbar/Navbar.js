import Search from "./Search";
import "./Navbar.css";
import { searchMovies } from "../fetchServices";
import SearchLogo from "./Search.svg";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import {API_KEY, DEFAULT_IMG} from "./const";


function Navbar({
  setSearchedKeyword,
  isSearchKeyword,
  setIsSearchKeyword,
  setSearchedMovies,
  searchedKeyword,
}) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchedKeyword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Hello");

    isSearchKeyword
      ? searchMovies(API_KEY, searchedKeyword).then((data) => {
          setSearchedMovies(data.results);
        })
      : setIsSearchKeyword(!isSearchKeyword);
    searchMovies(API_KEY, searchedKeyword).then((data) => {
      setSearchedMovies(data.results);
    });
    //    setIsSearchKeyword(!isSearchKeyword)
  };

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <h1
        className="navbar-logo"
        style={{ marginTop: "15px", marginLeft: "45px" }}
      >
        Navbar
      </h1>
      <form onSubmit={onSubmitHandler} className="form-search">
        <input
          type="text"
          placeholder="Search a Movie/TV"
          onChange={onChangeHandler}
        />
        <button type="submit" className="btn-submit-search">
          <FontAwesomeIcon
            icon={faSearch}
            inverse={navbar ? false : true}
            size="2x"
          />
        </button>
      </form>
      {/* <Search setSearchedKeyword={setSearchedKeyword} isSearchKeyword={isSearchKeyword} setIsSearchKeyword={setIsSearchKeyword} setSearchedMovies={setSearchedMovies} searchedKeyword={searchedKeyword}/> */}
    </div>
  );
}

export default Navbar;
