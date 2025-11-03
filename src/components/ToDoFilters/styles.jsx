import styled from "styled-components";
import { Search } from "lucide-react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.placeholder};

  margin-top: 16px;

  span {
    white-space: nowrap;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 140px;
  margin-right: -20px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Button = styled.button`
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  border: 2px solid transparent;
  padding: 3px 0;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.btnBg};
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  select {
    font-weight: 400;
    font-size: 14px;
    border: 2px solid #e5e7eb;
    border-radius: 4px;
    padding: 2px;
    outline: none;
    cursor: pointer;
  }
`;
