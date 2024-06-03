import React from "react";
import { useCallback, useState } from "react";
import ShippingForm from "./ShippingForm";

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );
  function post(url, data) {
    // Imagine this sends a request...
    console.log("POST /" + url);
    console.log(data);
  }
  return (
    <div className={theme} style={{ backgroundColor: "black", color: "white" }}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductPage;
