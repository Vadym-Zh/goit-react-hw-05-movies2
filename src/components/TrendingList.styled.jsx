import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ol`
  display: flex;
  flex-direction: column;
`;

export const MovieListItem = styled.li`
  padding-left: 6px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &::marker {
    color: #000000;
    font-weight: bold;
  }
`;

export const MovieListItemLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #ff8c00;
  }
`;
