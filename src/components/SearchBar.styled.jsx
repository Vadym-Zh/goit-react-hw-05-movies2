// import styled from 'styled-components';

// export const SearchForm = styled.form`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin: 0;
// `;

// export const Input = styled.input`
//   width: 300px;
//   height: 42px;
//   padding: 5px 10px;
//   border: 2px solid #ff8c00b7;
//   font-size: 1.2rem;
//   color: #ff8c007b;
//   border-radius: 4px;
//   outline: none;
//   box-sizing: border-box;
//   margin-right: 10px;
//   background-color: #0486e925;

//   &:focus {
//     border: 3px solid #ff8c00;
//     color: #ff8c00;
//   }
// `;

// export const Button = styled.button`
//   width: 70px;
//   height: 42px;
//   border: 2px solid #ff8c00;
//   background-color: #0486e925;
//   color: #ff8c00;
//   border-radius: 4px;
//   font-size: 17px;
//   font-weight: bold;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     cursor: pointer;
//     border: 3px solid #ff8c00b7;
//     color: #ff8c00b7;
//   }
// `;

// SearchBar.styled.js
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
