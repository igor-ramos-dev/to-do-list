import styled from "styled-components";

export const ButtonForm = styled.button`
  color: #fff;
  letter-spacing: inherit;
  font-size: 16px;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.btnBg};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.btnHover};
  }
`;

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
      color: ${({ theme }) => theme.colors.lightGray};
      font-weight: 400;
    }
  }
`;
