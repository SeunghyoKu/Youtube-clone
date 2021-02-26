import React, { useRef } from "react";
import styles from "./header.module.css";

const SearchBar = ({ onSearch, setSearched }) => {
  const inputRef = useRef();

  const onSubmit = () => {
    const searchText = inputRef.current.value;
    searchText && onSearch(searchText);
    setSearched(true);
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icons + " " + styles.micIcon}
      >
        <g className={styles.icons + " " + styles.micIcon} fill="#FFFFFF">
          <path
            d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
            className={styles.icons + " " + styles.micIcon}
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default SearchBar;
