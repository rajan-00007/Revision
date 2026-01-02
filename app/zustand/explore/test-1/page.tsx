"use client";

import {
  ProductCard,
  ProductImage,
  ProductLink,
  ProductsGrid,
  ProductTitle,
} from "@/app/products/Styled";
import useProductStore from "@/store/productsStore";
import { Pagediv } from "../../products/Styled";

const page = () => {
  const products = useProductStore((state) => state.products);

  console.log("page 2 products", products);

  return (
    <>
    <Pagediv>
      <div className=" w-[100vw]">
        <h1 className="text-[50px] text-center m-2">Total Products: {products.length}</h1>
      </div>
      <ProductsGrid>
        {products.map((product) => (
          <ProductLink
            key={product.id}
            href={`/zustand/products/${product.id}`}
          >
            <ProductCard>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductImage src={product.thumbnail} alt={product.title} />
            </ProductCard>
          </ProductLink>
        ))}
      </ProductsGrid>
      </Pagediv>
    </>
  );
};

export default page;
