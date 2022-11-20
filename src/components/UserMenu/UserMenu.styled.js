import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 10px;
`;

export const InfoContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 85px;
  font-size: 20px;
  font-weight: 700;
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
