import axios from "axios";

/*  TYPES  */

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

/*  API  */

async function getProduct(id: string): Promise<Product> {
  const res = await axios.get<Product>(
    `https://dummyjson.com/products/${id}`
  );

  return res.data;
}

/*  PAGE  */

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(
  { params }: PageProps
){
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width={300}
      />

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}
