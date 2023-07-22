// import styled from 'styled-components';

// export const CastItem = styled.ul`
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-gap: 20px;
// `;

// export const CastItemLi = styled.li`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// export const CastItemImage = styled.img`
//   width: 185px;
//   height: 278px;
//   margin-right: 20px;
// `;

// export const CastItemText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// export const CastItemTextP = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 10px;
//   margin-top: 0;
//   font-weight: bold;
// `;

// CastPart.styled.js
import styled from 'styled-components';

export const CastItem = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

export const CastItemLi = styled.li`
  width: 150px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CastItemImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

export const CastItemText = styled.div`
  text-align: center;
  margin-top: 5px;
`;

export const CastItemTextP = styled.p`
  font-size: 14px;
  margin: 0;
  color: #333;
`;
