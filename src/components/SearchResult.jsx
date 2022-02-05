import React from "react";
import "./SearchResult.css";

const SearchResult = ({ data }) => {
  return (
    <a href={data.html_url} target="_blank">
      <div className="search-results">
        <div className="avatar">
          <img src={data.avatar_url} alt="" />
        </div>
        <div className="username">{data.login}</div>
      </div>
    </a>
  );
};

export default SearchResult;
