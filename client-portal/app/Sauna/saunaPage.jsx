"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useRouter } from "next/navigation";

export default function SaunaPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center">Loading...</p>
      </div>
    );

  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="container px-5  w-full my-24">
      <div className="px-5 mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold mb-4 mt-5 text-zinc-950 text-center">
          Saunas
        </h1>

        <div className="flex flex-wrap mt-5">
          {products.map((product, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 w-full p-4">
              <div className="relative shadow-all1 p-6 rounded-2xl hover:shadow shadow-blue-500 flex flex-col items-center bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 mb-4 gray-100 object-cover"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {product.name}
                </h2>
                <p className="leading-relaxed text-base text-center mb-2">
                  ${product.price}
                </p>

                <div className="flex gap-2 w-full justify-center">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product._id,
                          title: product.name,
                          price: parseFloat(product.price),
                          image: product.image,
                        })
                      )
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product._id,
                          title: product.name,
                          price: parseFloat(product.price),
                          image: product.image,
                        })
                      );
                      router.push("/checkout");
                    }}
                    className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
