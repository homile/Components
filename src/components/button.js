import styled from "styled-components";

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor || "#228be6" };
  color: ${(props) => props.color || "white"};
  height: ${(props) => props.height || "54px"};
  font-size: ${(props) => props.fontsize || "20px"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 0 1rem;
  cursor: pointer;

  :hover{
    background-color: ${(props) => props.backgroundcolor || "#74c0fc" };
    color: ${(props) => props.color || "white"};
  }
`