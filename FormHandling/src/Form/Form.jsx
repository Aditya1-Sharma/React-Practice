import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  function delay(d) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved");
      }, d * 1000);
    });
  }
  const onsubmit = async (data) => {
    const res = await delay(2);

    // this is a express code yet to be done
    // let r = fetch("https://localhost:3000");
    // let res = (await r).text;
    // console.log(data, res);

    console.log(data);
    // For handling overall submit form error
    // if (data.username !== "shubham")
    // setError("myform", {
    //   message: "This form is not in good order since credentials are invalid",
    // });
  };
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          <p>
            <label htmlFor="username">Enter your username</label>
            <input
              type="text"
              placeholder="Enter username"
              id="username"
              {...register("username", {
                required: { value: true, message: "Mandatory Field" },
                minLength: { value: 3, message: "Min length should be 3" },
                maxLength: { value: 10, message: "It cannot exceed 10" },
              })}
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username.message}</span>
            )}
          </p>
          <p>
            <label htmlFor="password">Enter your secret code</label>
            <input
              type="password"
              placeholder="Enter username"
              id="password"
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "Password must be 8 charecter long",
                },
              })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </p>
          <input type="submit" value="Submit" disabled={isSubmitting} />
          {errors.myform && (
            <span style={{ color: "red" }}>{errors.myform.message}</span>
          )}
        </form>
      </div>
    </>
  );
}

export default Form;
