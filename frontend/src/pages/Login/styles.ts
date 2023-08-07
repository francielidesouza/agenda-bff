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
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${(props) => props.theme.primary};

  h2 {
    color: ${(props) => props.theme.buttonText};
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  label {
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 4px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.textSecondary};
    background-color: ${(props) => props.theme.inputBackground};

    ::placeholder {
      color: ${(props) => props.theme.placeholder};
    }
  }

  .link {
    color: ${(props) => props.theme.textSecondary};
    margin-bottom: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

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
`;
