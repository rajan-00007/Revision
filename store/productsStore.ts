import { create } from "zustand";

import axios from "axios";
import { error } from "console";

export type Product = {

  id: number;
  title: string;
  description?: string;
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail: string;
};

export type ProductStore = {

  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;

  fetchProductById: (id: string) => Promise<void>;

}

const useProductStore = create<ProductStore>((set) => ({

  products: [],
  product: null,
  loading: false,
  error: null,

  fetchProducts: async () => {

    set({
      loading: true,
      error: null
    });

    try {
      const res = await axios.get(
        "https://dummyjson.com/products?limit=100&skip=100"
      )

      set({
        products: res.data.products,
      })

    } catch (err) {

      set({
        error: " Failed to fetch Products",
      });
    } finally {

      set({
        loading: false,
      });
    }
  },

  fetchProductById: async (id) => {

    set({
      loading: true,
      error: null
    })

    try {

      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      )

      set({
        product: res.data
      });
    } catch (err) {

      set({
        error: " Failed to fetch product"
      })
    } finally {

      set({
        loading: false
      })
    }

  }

}))

export default useProductStore;

