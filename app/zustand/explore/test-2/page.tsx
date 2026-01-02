"use client";

import {
  ProductCard,
  ProductImage,
  ProductLink,
  ProductsGrid,
  ProductTitle,
} from "@/app/products/Styled";
import useProductStore from "@/store/productsStore";
import { ActionButton, Pagediv } from "../../products/Styled";

const Page = () => {
  const products = useProductStore((state) => state.products);

  const topRatedProducts = products.filter(
    (product) => (product.rating ?? 0) > 4
  );

  const handleClearStorage = () => {
    if (typeof window !== "undefined") {
      useProductStore.persist?.clearStorage?.();
    }
  };

  return (
    <Pagediv>
      <div className="w-[100vw] flex flex-col justify-center items-center">
        <h1 className="text-[50px] text-center m-2">
          Rating Filter Data
        </h1>

        <h1 className="text-[30px] text-center m-2">
          Total Products: {topRatedProducts.length}
        </h1>

        <ActionButton onClick={handleClearStorage}>
          Clear Storage
        </ActionButton>
      </div>

      <ProductsGrid>
        {topRatedProducts.map((product) => (
          <ProductLink
            key={product.id}
            href={`/zustand/products/${product.id}`}
          >
            <ProductCard>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductImage
                src={product.thumbnail}
                alt={product.title}
              />
              <ProductTitle>{product.rating}</ProductTitle>
            </ProductCard>
          </ProductLink>
        ))}
      </ProductsGrid>
    </Pagediv>
  );
};

export default Page;
