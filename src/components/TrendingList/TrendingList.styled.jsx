// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const MovieList = styled.ol`
//   display: flex;
//   flex-direction: column;
// `;

// export const MovieListItem = styled.li`
//   padding-left: 6px;
//   &:not(:last-child) {
//     margin-bottom: 8px;
//   }
//   &::marker {
//     color: #000000;
//     font-weight: bold;
//   }
// `;

// export const MovieListItemLink = styled(Link)`
//   text-decoration: none;
//   color: #000000;
//   &:hover {
//     color: #ff8c00;
//   }
// `;

// TrendingList.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieListItemLink = styled(Link)`
  font-size: 18px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;
