import styled from 'styled-components';

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 1300px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
