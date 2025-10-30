import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px 0;
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.btnTheme};
  box-shadow: ${({ theme }) => theme.colors.btnThemeShadow};
  border-radius: 34px;
  transition: all 0.2s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    bottom: 4px;

    border-radius: 50%;
    background-color: #fff;
    width: 26px;
    height: 26px;
    transition: all 0.4s ease;

    ${({ $currentTheme }) =>
      $currentTheme == "dark" &&
      css`
        transform: translateX(26px);
      `};
  }
`;
