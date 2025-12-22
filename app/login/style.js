"use client"

import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export const Card = styled.div`
  width: 360px;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`

export const Field = styled.div`
  margin-top: 1rem;
`

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-top: 0.3rem;
  border-radius: 6px;
  outline: none;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};

  &:focus {
    border-color: ${({ error }) => (error ? "red" : "#2563eb")};
  }
`

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.7rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`

export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`
