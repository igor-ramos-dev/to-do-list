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
  background-color: #ccc;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  cursor: pointer;

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: #fbb034;
      box-shadow: 0 0 1px #fbb034;

      &::before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    `}

  &::before {
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    content: "";
  }

  &.round {
    border-radius: 34px;

    &::before {
      border-radius: 50%;
    }
  }
`;
