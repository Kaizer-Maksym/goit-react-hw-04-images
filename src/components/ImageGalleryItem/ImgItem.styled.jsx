import styled from '@emotion/styled';

export const ImgItem = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  cursor: zoom-in;

  transition: transform cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  :focus,
  :hover {
    transform: scale(1.03);
  }
`;
