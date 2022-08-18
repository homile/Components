import React, { useEffect, useState } from "react";
import styled from "styled-components";

const list = [
  { title: "조민우", content: "재밌겠다 (사실 힘듬)" },
  { title: "장진", content: "파스타 챱챱 가즈아~~" },
  { title: "류지창", content: "백준 골드 얼마 안남았네요" },
  { title: "최수빈", content: "어허" },
  { title: "김영웅", content: "자전거 타러갈레요?" },
  { title: "강혜원", content: "(까마의 울음소리) 꺄야야앙.." },
  { title: "최정석", content: "민우님 섭섭해요..." },
  {
    title: "안수인",
    content:
      "토끼도 산책을 하나요? 네 합니다. 토끼도 주인을 알아보나요? 네 알아봅니다.",
  },
  {
    title: "양현준",
    content:
      "제주도 오시면 잘 모셔드립니다. 실제로 오신다고 하고 안오시더라구요...",
  },
  { title: "지수정", content: "영웅씨 민우씨" },
  { title: "김민준", content: "CSS 좋아요" },
  { title: "배자현", content: "모각코 배캠 onAir" },
];

const Week2 = () => {
  const [select, setSelect] = useState(false);
  const [locateY, setLocateY] = useState(0);
  const [browserHeight, setBrowserHeight] = useState(window.outerHeight/2);

  const clicked = (idx, e) => {
    setSelect(idx);
    window.scroll({ top: e.pageY-350, behavior: "smooth" });
    setLocateY(e.pageY)
    if (select === idx) {
      setSelect(false);
    }
  };

  const arrowUpHandler = () => {
    if(locateY === 0){
      window.scroll({ top: 1000, behavior: "smooth" });
      setLocateY(1400)
    }else{
      window.scroll({ top: 0, behavior: "smooth" });
      setLocateY(0)
    }
  };

  // const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  // const handleFollow = () => {
  //   setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  // }

  // useEffect(() => {
  //   console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  // }, [ScrollY])

  // useEffect(() => {
  //   const watch = () => {
  //     window.addEventListener('scroll', handleFollow);
  //   }
  //   watch(); // addEventListener 함수를 실행
  //   return () => {
  //     window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
  //   }
  // })

  return (
    <Container>
      <Accordion>
        {list.map((el, idx) => {
          return (
            <div key={idx} className="item">
              <div className="title" onClick={(e) => clicked(idx, e)}>
                <h2>{el.title}</h2>
                <span>{select === idx ? "-" : "+"}</span>
              </div>
              <div className={select === idx ? "content show" : "content"}>
                {el.content}
              </div>
            </div>
          );
        })}
      </Accordion>
      <PositionContainer onClick={arrowUpHandler}>
        <i className={locateY === 0 ? "fa-solid fa-circle-up top" : "fa-solid fa-circle-up"} />
      </PositionContainer>
    </Container>
  );
};

export default Week2;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 4rem;
  padding: 2rem;
`;

const Accordion = styled.div`
  width: 400px;

  .item {
    background: #f0ebe1;
    margin-bottom: 1rem;
    padding: 10px 20px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #85662b;
    cursor: pointer;
  }

  .content {
    color: #85662b;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;

const PositionContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  background: white;
  border-radius: 100%;
  border: 0px;

  i {
    font-size: 3rem;
    color: #85662b;
    cursor: pointer;
  }

  i.top{
    transform: rotate(180deg);
  }
`;
