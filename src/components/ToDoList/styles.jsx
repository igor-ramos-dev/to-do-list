import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin-top: 16px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #e5e7eb;
  padding: 12px 0;

  .item-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.icon};
  text-decoration: none;
  transition: color 0.15s ease-in;
  background: none;
  border: none;
  line-height: 0;
  width: 30px;
  height: 30px;
  outline: none;

  &.edit-button {
    &:hover {
      color: ${({ theme }) => theme.colors.iconHover};
    }
  }

  &.delete-button {
    &:hover {
      color: ${({ theme }) => theme.colors.deleteIconHover};
    }
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #2563eb;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
