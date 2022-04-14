import React from "react";
import "../css/header.scss";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiOutlineSearch,
} from "react-icons/ai";

interface ListProps {
  readonly isActive: boolean;
}

const List = styled.li<ListProps>`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 0.2rem 3rem;
  color: ${(props) => (props.isActive ? "red" : "white")};
`;
const Header = () => {
  const { pathname } = useLocation();
  return (
    <ul className="header">
      <Link to="/">
        <List isActive={pathname === "/"}>
          <AiFillHome style={{ marginRight: ".3rem" }} />
          Home
        </List>
      </Link>
      <Link to="/list">
        <List isActive={pathname === "/list" || pathname.includes("/detail")}>
          <AiOutlineUnorderedList style={{ marginRight: ".3rem" }} />
          List
        </List>
      </Link>
      <Link to="/search">
        <List isActive={pathname === "/search"}>
          <AiOutlineSearch style={{ marginRight: ".3rem" }} /> Search
        </List>
      </Link>
    </ul>
  );
};

export default Header;
