import styled from '@emotion/styled';
import { Field } from 'formik';
import { BsSearch } from 'react-icons/bs';

export const Search = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #185f9e;
`;

export const InputField = styled(Field)`
  width: 400px;
  height: 25px;
  border: none;
  padding: 5px;

  outline: none;
  :focus,
  :hover {
    outline: none;
  }
`;

export const Button = styled.button`
  display: inline-block;
  height: 35px;
  width: 30px;

  border: none;
  background-color: #ffffff;
  cursor: pointer;
`;

export const BtnIcon = styled(BsSearch)`
  margin: 0;
  padding: 0;
  opacity: 0.5;
  :focus,
  :hover {
    opacity: 1;
    fill: #000000;
  }
`;
