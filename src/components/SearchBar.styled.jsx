import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const Input = styled.input`
  width: 300px;
  height: 42px;
  padding: 5px 10px;
  border: 2px solid #ff8c00b7;
  font-size: 1.2rem;
  color: #ff8c007b;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  margin-right: 10px;
  background-color: #0486e925;

  &:focus {
    border: 3px solid #ff8c00;
    color: #ff8c00;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 42px;
  border: 2px solid #ff8c00;
  background-color: #0486e925;
  color: #ff8c00;
  border-radius: 4px;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    border: 3px solid #ff8c00b7;
    color: #ff8c00b7;
  }
`;
