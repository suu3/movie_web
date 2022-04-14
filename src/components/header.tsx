import React from "react";
import "../css/header.scss";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface ListProps {
  readonly isActive: boolean;
}

const List = styled.li<ListProps>`
  list-style: none;
  font-size: 1.4rem;
  padding: 0.2rem 3rem;
  color: ${(props) => (props.isActive ? "red" : "white")};
`;
const Header = () => {
  const { pathname } = useLocation();
  return (
    <ul className="header">
      <Link to="/">
        <List isActive={pathname === "/"}>Home</List>
      </Link>
      <Link to="/list">
        <List isActive={pathname === "/list" || pathname.includes("/detail")}>
          List
        </List>
      </Link>
      <Link to="/search">
        <List isActive={pathname === "/search"}>Search</List>
      </Link>
    </ul>
  );
};

export default Header;
