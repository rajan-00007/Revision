'use client'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fb;
`;

export const Form = styled.form`
  width: 420px;
  background: #ffffff;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #1f2937;
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => (hasError ? "#ef4444" : "#d1d5db")};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) =>
      hasError ? "#ef4444" : "#2563eb"};
  }
`;

export const Error = styled.p`
  margin-top: 4px;
  font-size: 12px;
  color: #ef4444;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #1e40af;
  }
`;
