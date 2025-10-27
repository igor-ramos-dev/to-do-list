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
  border-radius: 34px;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  cursor: pointer;

  &::before {
    position: absolute;
    left: 4px;
    bottom: 4px;

    border-radius: 50%;
    background-color: #fff;
    width: 26px;
    height: 26px;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    content: "";
  }

  ${({ $selectedTheme }) =>
    $selectedTheme == "dark" &&
    css`
      background-color: ${({ theme }) => theme.colors.btnTheme};
      box-shadow: ${({ theme }) => theme.colors.btnThemeShadow};

      &::before {
        transform: translateX(26px);
        -ms-transform: translateX(26px);
        -webkit-transform: translateX(26px);
      }
    `}
`;
