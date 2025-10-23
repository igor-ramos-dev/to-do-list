import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  margin-top: 16px;
  letter-spacing: 0.03em;

  input {
    font-size: 14px;
    padding: 10px 6px;
    border-radius: 4px;
    border: 0.5px solid #e5e7eb;
    width: 100%;
    outline: none;
    letter-spacing: inherit;

    &::placeholder {
      color: #b2bac8;
      font-weight: 400;
    }
  }

  button {
    color: #fff;
    letter-spacing: inherit;
    font-size: 16px;
    padding: 10px 16px;
    background: rgba(80, 97, 252, 1);
    border: none;
    border-radius: 4px;
  }
`;
