import styled from "styled-components";

/* Form container */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin: auto;
`;

/* Input fields */
export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

/* Select fields */
export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

/* Checkbox container */
export const CheckboxContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

/* Label text */
export const Label = styled.label`
  font-size: 0.9rem;
`;

/* Error text */
export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

/* Submit button */
export const Button = styled.button`
  padding: 0.75rem;
  border: none;
  background-color: #0070f3;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;
