import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 100px;
  height: 60px;
  background-color: #009dc4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #fffffe;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: #ff8c00;
    font-weight: bolder;
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  padding: 30px;
`;
