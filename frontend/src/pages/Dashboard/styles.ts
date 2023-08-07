import styled from "styled-components";

export const Header = styled.header`
  color: ${(props) => props.theme.textPrimary};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.buttonBackground};
  h1 {
    color: ${(props) => props.theme.buttonText};
    width: 80%;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 62%;
    justify-content: space-between;

    button {
      background-color: ${(props) => props.theme.card};
      color: ${(props) => props.theme.textPrimary};
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.5rem;

      &:hover {
        background-color: ${(props) => props.theme.buttonBackgroundHover};
      }
    }
  }
`;

export const Container = styled.main`
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Board = styled.ul`
  display: flex;
  background-color: var(--color-blue-400);
  height: 80vh;
  width: 100%;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #a5cded;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    height: 25%;
    justify-content: center;

    h3,
    p {
      padding: 3px;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      button {
        background-color: ${(props) => props.theme.buttonBackground};
        color: ${(props) => props.theme.buttonText};
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;

        &:hover {
          background-color: ${(props) => props.theme.buttonBackgroundHover};
        }
      }
    }
  }
`;
