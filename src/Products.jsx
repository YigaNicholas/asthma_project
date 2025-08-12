import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;
  const max = 50;

  // Async function to fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();
      console.log(data)

      // Append new products
      setProducts((prev) => [...prev, ...data.products]);

      // If fetched products are less than limit, disable the button
      if (data.products.length < limit) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Load first products on mount
  useEffect(() => {
    fetchProducts();
  }, [skip]);

  // Load more handler
  const loadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-red-500 text-center p-5 text-xl">welcome to the panel</h1>
        <div className="grid grid-cols-4 gap-5">
            
            {products.map((product)=>(
                <div key={product.id} className="p-3 border border-black flex flex-col gap-4">
                    
                    <img src={product.thumbnail} alt={product.title} className="w-[200px] h-[200px] cursor-pointer" />
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
      
    <div className="text-center">
      <button
        onClick={loadMore}
        disabled={products.length>=max}
        className={`mt-4 px-4 py-2 rounded ${
          hasMore
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        {products.length>=max ? "no more products" : "load more"}
      </button>
      </div>
    </div>
  );
}
