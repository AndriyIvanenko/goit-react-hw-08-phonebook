import styled from 'styled-components';

export const Contact = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  width: 130px;
`;

export const Button = styled.button`
  margin-left: 20px;
  font-size: 11px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  border: none;
  border-radius: 2px;
  outline: 1px solid grey;

  &:hover {
    cursor: pointer;
    background-color: #cf2828;
    outline: none;
    color: #fff;
  }
`;
