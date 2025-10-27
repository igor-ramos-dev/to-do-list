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
    gap: 16px;

    a {
      color: ${({ theme }) => theme.colors.icon};
      text-decoration: none;
      transition: color 0.15s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.iconHover};
      }
    }
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #2563eb;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
