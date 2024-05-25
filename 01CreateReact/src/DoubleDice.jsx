// import React from "react";

// function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 6);
//   const num2 = Math.floor(Math.random());
//   const result = num1 === num2 ? "You Win!!!" : "You Loses";
//   return (
//     <>
//       <h1>{result}</h1>
//       <h3>num1 : {num1}</h3>
//       <h3>num2: {num2}</h3>
//     </>
//   );
// }

// export default DoubleDice;
import React from "react";

function DoubleDice() {
  const num1 = Math.floor(Math.random() * 6);
  const num2 = Math.floor(Math.random());
  //   const result = num1 === num2 ? "You Win!!!" : "You Loses";
  const styles = { color: "purple" };
  return (
    <>
      <div className="doubleDice" style={styles}>
        <h2>Double Dice</h2>
        {num1 === num2 ? <h3>You Win</h3> : null}
        <h3>num1 : {num1}</h3>
        <h3>num2: {num2}</h3>
      </div>
    </>
  );
}

export default DoubleDice;
