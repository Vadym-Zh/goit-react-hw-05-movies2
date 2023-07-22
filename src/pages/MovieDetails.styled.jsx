// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const DetailsContainer = styled.div`
//   padding: 20px;
// `;

// export const BackButton = styled(Link)`
//   text-decoration: none;
//   color: #3da9fc;
//   font-size: 1.2rem;
//   font-weight: bold;

//   &:hover {
//     color: #0485e9;
//   }
// `;

// export const LinkContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
//   padding: 20px 10px;
//   border: 4px solid #ff8c00;
//   /* border-top: 4px solid #ff8c00; */
// `;

// export const LinkItemCast = styled(Link)`
//   text-decoration: none;
//   color: #094067;
//   margin-right: 100px;
//   font-size: 1.7rem;
//   font-weight: bold;

//   &:hover {
//     color: #0485e9;
//   }
// `;

// export const LinkItemReview = styled(Link)`
//   text-decoration: none;
//   color: #094067;
//   font-size: 1.9rem;
//   font-weight: bold;

//   &:hover {
//     color: #0485e9;
//   }
// `;

// MovieDetails.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const LinkItem = styled(Link)`
  padding: 10px 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const LinkItemCast = styled(LinkItem)``;

export const LinkItemReview = styled(LinkItem)``;

export const MovieCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
