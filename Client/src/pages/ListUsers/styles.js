import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 20px;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    margin: 40px 0;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 15px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
    max-width: 480px;


  h3 {
    color: #fff;
    font-size: 24px;
    margin: 0;
    word-break: break-word;
  }

  p {
    color: #fff;
    font-size: 12px;
    font-weight: 200;
    margin: 0;
    word-break: break-word;
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const Trashimg = styled.img`
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
    opacity: 0.6;
  }
`;
