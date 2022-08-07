import styled from '@emotion/styled';

const LoadMore = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  background-color: #326aee;
  border: none;
  outline: none;

  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: inherit;

  margin-left: auto;
  margin-right: auto;

  transition: background-color cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  cursor: pointer;

  :focus,
  :hover {
    background-color: #124bd2;
  }
`;

export default LoadMore;
