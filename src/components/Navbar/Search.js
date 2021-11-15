import React, { useState } from "react";
import { searchMovies } from "../fetchServices";
import {API_KEY} from "./const";


function Search({
  setSearchedKeyword,
  isSearchKeyword,
  setIsSearchKeyword,
  setSearchedMovies,
  searchedKeyword,
}) {
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
    <div>
      <h1>Search</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Movie/TV"
          onChange={onChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
