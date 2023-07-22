// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const NavContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0 100px;
//   height: 60px;
//   background-color: #009dc4;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// export const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin: 0;
// `;

// export const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   font-size: 1.2rem;
//   color: #fffffe;

//   &:not(:last-child) {
//     margin-right: 30px;
//   }

//   &.active {
//     color: #ff8c00;
//     font-weight: bolder;
//     transform: scale(1.2);
//   }
// `;

// export const Content = styled.div`
//   padding: 30px;
// `;

// SharedLayout.styled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  background-color: #007bff;
  padding: 10px 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavLinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  margin: 0 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &.active {
    background-color: #0056b3;
  }
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
`;
