import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 3px;
  width: 270px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 14px;
  margin-top: 20px;
  padding: 6px;
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
