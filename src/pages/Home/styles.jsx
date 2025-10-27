import styled from "styled-components";

export const Container = styled.div`
  max-width: 680px;
  width: 90%;
  margin: 70px auto 0;

  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  border: 2px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.card};
`;
