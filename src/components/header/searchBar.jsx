import React, { useRef } from "react";
import styles from "./header.module.css";

const SearchBar = ({ onSearch, setSearched }) => {
  const inputRef = useRef();

  const onSubmit = () => {
    const searchText = inputRef.current.value;
    if (searchText) {
      onSearch(searchText);
      setSearched(true);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const onKeyPress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          ref={inputRef}
          placeholder="검색"
        />
        <button
          className={styles.searchButton}
          onClick={onClick}
          onKeyPress={onKeyPress}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.icons}
          >
            <g className={styles.icons} fillOpacity="0.5" fill="#FFFFFF">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                className={styles.icons}
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
