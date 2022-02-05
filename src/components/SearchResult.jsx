import React from "react";
import "./SearchResult.css";

const SearchResult = ({ data }) => {
  return (
    <div
      className="search-results"
      onClick={() => window.open(data.html_url, "_blank")}
    >
      <div className="avatar">
        <img src={data.avatar_url} alt="" />
      </div>
      <div className="username">{data.login}</div>
    </div>
  );
};

export default SearchResult;
