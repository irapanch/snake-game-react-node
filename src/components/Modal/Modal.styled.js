import styled from 'styled-components';

export const Container = styled.section`
  /* background-color: green;
  opacity: 0.5; */
`;
export const StyledForm = styled.form`
  position: relative;
  width: 335px;
`;
export const StyledLabel = styled.label``;
export const StyledInput = styled.input`
  position: relative;
  width: 100%;
  height: 54px;
  margin-bottom: 25px;
  background-color: transparent;
  border: 1px solid rgba(0, 189, 31, 0.75);
  cursor: pointer;
  color: green;
  text-align: center;
  font-size: 17px;
  line-height: 1.125;

  &:focus-visible {
    outline: none;
    border-color: green;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: green;

    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }
`;
export const Error = styled.p`
  position: absolute;
  top: 42px;
  left: 95px;
  color: red;
`;
export const ButtonStart = styled.button`
  padding: 10px 20px;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.4;
  color: green;
  cursor: pointer;
`;
