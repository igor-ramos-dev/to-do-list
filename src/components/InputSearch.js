import styled from "styled-components";

export const InputSearch = styled.input`
  font-size: inherit;
  border: none;
  outline: none;
  background-color: transparent;

  &.search-toDo {
    width: 100%;
    padding: 8px 0 8px 28px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
