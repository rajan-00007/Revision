import styled from "styled-components";

export const Pagediv = styled.div`
  min-height: 100vh;
  width: 98vw;
  display: flex;
  flex-direction:column;
  padding:10px;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
   display:flex;
   gap:5px;
   border:1px solid gray;
`

export const LoadingText = styled.p`
  font-size: 30px;
  color: gray;
  margin: 0;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-weight:600;
  border-radius: 4px;
  background: blue;
  cursor: pointer;
  color:white;
  margin:10px;
  

`;