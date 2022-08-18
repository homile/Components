import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useState } from "react";

import { Container } from "../components/areas";
import { PrimaryButton } from "../components/button";
import Slide from "../components/Slide";

const TOTAL_SLIDES = 1; // 전체 슬라이드 수(인덱스 번호)

const Week3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const prevSlideHandler = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
    console.log(currentSlide);
  };

  const nextSlideHandler = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
    console.log(currentSlide);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%`;
  }, [currentSlide]);

  return (
    <>
      <Container>
        <CarouselContainer ref={slideRef}>
          <div>
            <Slide img={process.env.PUBLIC_URL + "/img1.jpeg"} />
          </div>
          <div>
            <Slide img={process.env.PUBLIC_URL + "/img2.jpeg"} />
          </div>
        </CarouselContainer>
        <ButtonContainer>
          <PrimaryButton height="2rem" onClick={prevSlideHandler}>
            {" "}
            <i className="fa-solid fa-caret-left" />
          </PrimaryButton>
          <PrimaryButton height="2rem" onClick={nextSlideHandler}>
            <i className="fa-solid fa-caret-right" />
          </PrimaryButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Week3;

const CarouselContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  /* 선을 넘어간 이미지들을 숨겨준다. */
  /* overflow: hidden; */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
