import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton } from "./button";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <MainNav>
      <Link to="/week1">
        <PrimaryButton>Nav 드롭다운</PrimaryButton>
      </Link>
      <Link to="/week2">
        <PrimaryButton>아코디언</PrimaryButton>
      </Link>
      <Link to="/week3">
        <PrimaryButton>케러샐</PrimaryButton>
      </Link>
      <Link to="/week4">
        <PrimaryButton>회원가입</PrimaryButton>
      </Link>
      {pathname !== "/" && (
        <Link to="/">
          <PrimaryButton>메인으로</PrimaryButton>
        </Link>
      )}
    </MainNav>
  );
};

export default Nav;

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 1rem;
`;
