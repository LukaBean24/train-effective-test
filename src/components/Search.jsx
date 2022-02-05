import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchResult from "./SearchResult";

const Search = () => {
  const [userData, setUserData] = useState([]);
  const inputHandler = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${event.target.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log("There Was Some Type off error" + err);
      });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search For Github User"
        onChange={inputHandler}
      />
      {userData.login && userData.login.length > 0 && (
        <SearchResult data={userData} />
      )}
      {!userData && <h1>User Cant Be found</h1>}
    </div>
  );
};

export default Search;
