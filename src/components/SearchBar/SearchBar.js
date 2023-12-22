import React, { useEffect, useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ searchedNotes, setSearchedNotes }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchedNotes(searchText);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  useEffect(() => {
    console.log("rANS");
    setSearchText(searchedNotes);
  }, [searchedNotes]);

  return (
    <div className="NavbarContainer_Search">
      <input
        className="InputContainer"
        placeholder="Enter Title or Content"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
