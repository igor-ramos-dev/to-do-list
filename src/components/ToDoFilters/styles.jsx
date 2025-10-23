import styled from "styled-components";
import { Search } from "lucide-react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 22px;
  color: #9ca3af;

  margin-top: 18px;

  a {
    text-decoration: none;
    color: #9ca3af;
  }

  span {
    white-space: nowrap;
  }

  select {
    font-weight: 400;
    font-size: 14px;
    border: 2px solid #e5e7eb;
    border-radius: 4px;
    padding: 2px;
  }

  .ordenar-box {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  input {
    width: 100%;
    padding-left: 28px;
    font-size: 15px;
    color: #1f2937;
    border: none;
    outline: none;

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
`;
