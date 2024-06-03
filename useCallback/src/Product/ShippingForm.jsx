import React from "react";
import { memo, useState } from "react";
function ShippingForm({ onSubmit }) {
  const [count, setcount] = useState(1);
  console.log("Slow Down the Rendering shippingForm");
  let startTime = performance.now();
  while (performance.now() - startTime < 500);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p>
          <b>ShippingForm is slowed intentionally</b>
        </p>
        <label>
          Number of item : {count}
          <button onClick={() => setcount(count + 1)}>+</button>
          <button onClick={() => setcount(count - 1)}>-</button>
        </label>

        <label>
          Street:
          <input name="street" />
        </label>
        <label>
          City:
          <input name="city" />
        </label>
        <label>
          Postal code:
          <input name="zipCode" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default memo(ShippingForm);
