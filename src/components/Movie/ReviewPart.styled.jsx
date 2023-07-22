// import styled from 'styled-components';

// export const ReviewList = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   list-style: none;
//   width: 1300px;
// `;

// export const ReviewItem = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;

//   &:not(:last-child) {
//     margin-bottom: 20px;
//   }
// `;

// ReviewPart.styled.js
import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const ReviewAuthor = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;
