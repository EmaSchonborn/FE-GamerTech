import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { createUser } from "../Redux/actions.js";
// import style from "./Register.module.css";

export default function CreateUser() {
  let dispatch = useDispatch();
  // let history = useHistory();
  const [error, setError] = useState({});
  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "You have to select a name!.";
    }
    if (!/^[A-Za-z\s]+$/.test(input.name)) {
        errors.name = "The name must only contain letters and spaces.";
    }
    if (input.name.search("[^A-Za-z0-9]") !== -1) {
      errors.name = "The name must not contain symbols or spaces.";
    }
    if (!input.password) {
      errors.password = "You have to select a password!.";
    }
    if (!input.email) {
      errors.email = "You have to select a email!.";
    }
    return errors;
  }

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...input };
    dispatch(createUser(data));
    console.log(data)
    setInput({
      name: "",
      email: "",
      password: "",
      
    });

    if (data.name && data.email && data.password) {
      alert("Register successfull!");
      // history.push("/");
    } else {
      alert("You most to complete the info");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-50 w-full h-screen text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-indigo-600 p-5 rounded-md text-white"
      >
        <div>
          <h1 className="font-bold text-2xl text-white text-center">
            Crear cuenta
          </h1>
          <div >
            <div>
              <div >
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black ml-10 rounded-md"
                />
                {error.name && <p>{error.name}</p>}
              </div>
              <br></br>
              <div>
                <label >Email: </label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black ml-11 rounded-md"
                />
                {error.email && <p>{error.email}</p>}
              </div>
              <br></br>
              <div>
                <label >Password: </label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black ml-1 rounded-md"
                />
                {error.password && (
                  <p >{error.password}</p>
                )}
              </div>
              <br></br>
            </div>
          </div>
          <div >
            

            {!error.name && !error.email && !error.phone && !error.password ? (
              <button
                type="submit"
                className="flex-none rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Crear Usuario
              </button>
            ) : null}
           <Link to="/login">
              <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Ingresar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}