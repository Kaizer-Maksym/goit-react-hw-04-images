import styled from '@emotion/styled';

export const GalleryContainer = styled.ul`
  display: grid;
  max-width: 1600px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 12px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 15px 30px 15px;
`;
