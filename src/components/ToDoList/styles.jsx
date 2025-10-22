import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin-top: 22px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })``;
