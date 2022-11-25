import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: color linear 150ms;

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
