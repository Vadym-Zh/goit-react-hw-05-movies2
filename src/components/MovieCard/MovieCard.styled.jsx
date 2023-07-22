// import styled from "styled-components";

// export const MovieCardContainer = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 20px;
//     margin-top: 20px;
// `;

// export const MovieCardImage = styled.img`
//     width: 290px;
//     height: 460px;
//     margin-right: 50px;
// `;

// export const MovieCardContent = styled.div`
//     height: 460px;
// `;

// export const MovieCardTitle = styled.h3`
//     font-size: 3rem;
//     margin-bottom: 40px;
//     margin-top: 0;
// `;

// export const MovieCardDescription = styled.p`
//     font-size: 1.5rem;
//     margin-bottom: 40px;
//     width: 900px;
// `;

// export const MovieCardGenres = styled.ul`
//     list-style: none;
//     display: flex;
//     padding: 0;
// `;

// export const MovieCardGenre = styled.li`
//     font-size: 1.2rem;
//     font-weight: bold;

//     &:not(:last-child) {
//         margin-right: 6px;
//         border-right: 2px solid #000;
//         padding-right: 6px;
//     }
// `;

// MovieCard.styled.js
import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const MovieCardImage = styled.img`
  width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
`;

export const MovieCardContent = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const MovieCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

export const MovieCardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const MovieCardGenres = styled.div`
  margin-top: 10px;
`;

export const MovieCardGenre = styled.span`
  font-size: 14px;
  color: #007bff;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
