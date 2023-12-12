import styled from "@emotion/styled";

export const ErrorMes = styled.p`
  color: #d32f2f;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
export const TitleWrapper = styled.div`
  width: 600px;
`;

export const TitleSpan = styled.span`
  font-weight: 700;
  color: ${({ color }) => color};
  text-transform: uppercase;
`;
