import axios from "axios";
import {
  ProductsGrid,
  ProductCard,
  ProductLink,
  ProductImage,
  ProductTitle,
} from "./Styled";

/*  TYPES  */

type Product = {
  id: number;
  title: string;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
};

/*  API  */

async function getProducts() {
  const res = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products?limit=10&skip=100"
  );

  return res.data.products;
}

/*  PAGE  */

export default async function Page() {
  const products = await getProducts();

  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductLink key={product.id} href={`/products/${product.id}`}>
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
  );
}
