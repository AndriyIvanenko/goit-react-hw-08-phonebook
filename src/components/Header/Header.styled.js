import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  padding: 10px;
  padding-top: 0;
  width: 500px;
  margin: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  padding-left: 4px;
  padding-right: 3px;

  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: #cf2828;
  }

  &:hover {
    cursor: pointer;
    color: #cf2828;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 85px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  padding: 3px;
  border: none;
  border-radius: 3px;
  outline: 1px solid grey;

  &:hover {
    cursor: pointer;
    background-color: #cf2828;
    outline: none;
    color: #fff;
  }
`;
