import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useState } from "react";

import { PrimaryButton } from "../components/button";
import Slide from "../components/Slide";

const TOTAL_SLIDES = 2; // 전체 슬라이드 수(인덱스 번호)

const Week3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const slideRef = useRef(null);

  const prevSlideHandler = () => {
    // 이전 버튼을 눌렀을 때
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  useEffect(() => {
    let timer;
    // 재생중 3초 간격으로 슬라이드 변화
    if (isPlay) {
      timer = setTimeout(() => {
        if (currentSlide >= TOTAL_SLIDES) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }, 3000);
    }
    // 일시정지 버튼을 누를 경우 타이머를 제거하여 해당 이미지에 정지.
    return () => {clearTimeout(timer)}
  });

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
          <div>
            <Slide img={process.env.PUBLIC_URL + "/img1.jpeg"} />
          </div>
        </CarouselContainer>
        <ButtonContainer>
          <PrimaryButton height="2rem" onClick={prevSlideHandler}>
          <i className="fa-solid fa-angle-left"/>
          </PrimaryButton>
          <PrimaryButton height="2rem" onClick={() => setIsPlay(!isPlay)}>
            {isPlay ? (
              <i className="fa-solid fa-pause" />
            ) : (
              <i className="fa-solid fa-play" />
            )}
          </PrimaryButton>
          <PrimaryButton height="2rem" onClick={nextSlideHandler}>
          <i className="fa-solid fa-angle-right"/>
          </PrimaryButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Week3;

const Container = styled.div`
  width: 400px;
  height: 100%;
  /* 선을 넘어간 이미지들을 숨겨준다. */
  overflow: hidden;
  margin-top: 10rem;
`;

const CarouselContainer = styled.div`
  display: flex;
  /* margin: 0 auto; */
  width: 400px;
  height: 400px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
