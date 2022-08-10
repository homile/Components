import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { PrimaryButton } from "./button";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <MainNav>
      <Link to="/week1">
        <PrimaryButton>Nav 드롭다운 컴포넌트</PrimaryButton>
      </Link>
      <Link to="/week2">
        <PrimaryButton>케러샐 컴포넌트</PrimaryButton>
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
