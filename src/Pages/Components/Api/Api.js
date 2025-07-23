import React from "react";

import { useEffect, useState } from "react";

export default function Api() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error("Error Fetching Products:", err));
  }, []);

  console.log("Products:", products);

  return (
    <>
      <div className="container py-4">
        <h2 className="text-center mb-4">Top 50 Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-sm-6 col-md-4 mb-3" key={product.id}>
              <div className="card sahadow-sm h-100 w-100">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                    {/* <h3 className="text-center">{product.[1].date}</h3> */}
                    <h5 className="card-title text-center">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                    <div className="mt-auto text-center my-2">
                        <span className="text-primary fw-bold">${product.price}</span>
                    </div>
                    <button className="btn btn-success">Card Button</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
