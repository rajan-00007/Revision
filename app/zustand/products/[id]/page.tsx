"use client";

import { useEffect } from "react";
import useProductStore from "@/store/productsStore";
import { 
    ErrorText, 
    LoadingText, 
    Pagediv 
  } from "../Styled";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {

  const { id } = useParams<{ id: string }>();

  const { 
    product, 
    fetchProductById, 
    loading, 
    error } = useProductStore();

  useEffect(() => {
    fetchProductById(id);
  }, [id, fetchProductById]);

  if (loading) {
    return (
      <>
        <Pagediv>
          <LoadingText>Loading...</LoadingText>
        </Pagediv>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Pagediv>
          <ErrorText>{error}</ErrorText>
        </Pagediv>
      </>
    );
  }

  if (!product) return null;

  return (
    <>
      <div>
        <h1>{product.title}</h1>

        <img src={product.thumbnail} alt={product.title} width={300} />

        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
      
      </div>


    </>
  );
}
