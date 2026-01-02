"use client";

import { useEffect } from "react";
import useProductStore from "@/store/productsStore";
import { 
  ProductCard, 
  ProductImage, 
  ProductLink, 
  ProductsGrid, 
  ProductTitle } from "@/app/products/Styled";
import { 
  ActionButton,
  ErrorText, 
  LoadingText , 
  Pagediv, 
  Row} from "./Styled";
import Link from "next/link";


export default  function Page() {

  const { 
    products, 
    fetchProducts, 
    loading, 
    error } = useProductStore();
    
    useEffect(() => {

       fetchProducts();
    }, [fetchProducts])
    
    if (loading) {
      return(
        <>
        <Pagediv>
          <LoadingText>Loading...</LoadingText>
        </Pagediv>
        </>
      )
    }

    if (error) {
      return(
        <>
        <Pagediv>
          <ErrorText>{error}</ErrorText>
        </Pagediv>
        </>
      )
    }
    
  return (
    <>
      <Pagediv>
      <Row>
        <ActionButton><Link href="/zustand/explore/test-1" >Get without API Call</Link></ActionButton>

        <ActionButton><Link href="/zustand/explore/test-2" >Rating Filter</Link></ActionButton>
        
      </Row>
      
    <ProductsGrid>
      {products.map((product) => (
        <ProductLink key={product.id} href={`/zustand/products/${product.id}`}>
          <ProductCard>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage
              src={product.thumbnail}
              alt={product.title}
            />
          </ProductCard>
        </ProductLink>
      ))}
    </ProductsGrid>

      </Pagediv>
    </>
  );
}
