"use client";

import styled from "styled-components";
import Link from "next/link";

/*  FLEX GRID CONTAINER  */

export const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;          
  gap: 20px;                
  justify-content: center;   
  padding: 20px;
`;

/*  PRODUCT CARD  */

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;             
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

/*  LINK  */

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

/*  IMAGE  */

export const ProductImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

/*  TITLE  */

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
`;
