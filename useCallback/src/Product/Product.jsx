import React from "react";
import { useState } from "react";
import ProductPage from "./ProductPage";
function Product() {
  const [isDark, setisDark] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setisDark(e.target.checked)}
        />
        Dark Mode
      </label>

      <hr />
      <div>
        <ProductPage
          referrerId="wizard_of_oz"
          productId={123}
          theme={isDark ? "dark" : "light"}
        />
      </div>
    </>
  );
}

export default Product;
