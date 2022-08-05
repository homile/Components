import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./Week1.css";

function Week1() {
  // 참고사이트: https://github.com/homile
  const [userClick, setUserClick] = useState(false);

  const userClickHandler = () => {
    setUserClick(!userClick);
  };

  return (
    <>
      <div className="week1-container" onClick={userClickHandler}>
        Minwoo-Cho
      </div>
      {userClick && (
        <DropDown>
          <Link to="/">
            <div className="dropdown dropdown-main">메인으로</div>
          </Link>
          <hr></hr>
          <div className="dropdown dropdown-week">Week1</div>
          <div className="dropdown dropdown-week">Week2</div>
          <div className="dropdown dropdown-week">Week3</div>
        </DropDown>
      )}
    </>
  );
}

export default Week1;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 8rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  hr{
    width: 100%;
    border: 0.5px solid lightgray;
  }
`;
