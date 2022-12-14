import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  margin: 10px;
  width: 400px;
`;

export const Input = styled.input`
  margin-left: 10px;
  border-bottom: solid 2px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 20px;
  width: 300px;
  &:focus {
    outline: none;
    color: DeepSkyBlue;
  }
`;

export const Forms = styled.form`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  color: #000;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`;