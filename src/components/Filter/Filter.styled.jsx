import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  margin: 10px;
  wihth: 0px;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px
`;

export const Input = styled.input`
  width: 300px;
  margin-left: 10px;
  border-bottom: solid 2px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 20px;
  &:focus {
    outline: none;
    color: DeepSkyBlue;
  }
`;
