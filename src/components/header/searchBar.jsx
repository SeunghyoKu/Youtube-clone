import React, { useRef } from "react";
import icons from "../../service/icons";
import styles from "./header.module.css";
import styled from "styled-components";

const SearchBar = ({ onSearch, setSearched, theme }) => {
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
    <SearchBarDiv>
      <SearchForm>
        <SearchInput
          type="text"
          ref={inputRef}
          placeholder="검색"
          theme={theme}
        />
        <SearchButton theme={theme} onClick={onClick} onKeyPress={onKeyPress}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g className={styles.icons} fillOpacity="0.5" fill="#606060">
              <path d={icons.search}></path>
            </g>
          </svg>
        </SearchButton>
      </SearchForm>
    </SearchBarDiv>
  );
};

export default SearchBar;

const SearchBarDiv = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
  @media (max-width: 1020px) {
    width: 35%;
  }
  @media (max-width: 670px) {
    width: 30%;
  }
  @media (max-width: 625px) {
    display: none;
  }
`;

const SearchForm = styled.form`
  width: 100%;
  height: 30px;
`;

const SearchInput = styled.input`
  vertical-align: top;
  width: 80%;
  height: 26px;
  border-radius: 2px;
  border: ${(props) =>
    props.theme === "dark" ? "1px solid #303030" : "1px solid #cccccc"};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  background-color: ${(props) =>
    props.theme === "dark" ? "#121212" : "white"};
  @media (max-width: 1020px) {
    width: 70%;
  }
  @media (max-width: 830px) {
    width: 60%;
  }
  @media (max-width: 670px) {
    width: 50%;
  }
`;

const SearchButton = styled.button`
  height: 30px;
  width: 65px;
  border: none;
  padding: 1px 6px 1px 6px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#323232" : "f8f8f8"};
`;
