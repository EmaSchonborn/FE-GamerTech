import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser, sendEmail } from "../Redux/actions.js";
import {auth} from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import style from "./Register.module.css";

export default function CreateUser() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
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
    createUserWithEmailAndPassword(auth, data.email, data.password).then((dataFirebase)=>{
      console.log(dataFirebase)
      dispatch(createUser(data));
      const dataEmail = { email: data.email };
      dispatch(sendEmail(dataEmail));
      console.log(data);
      setInput({
        name: "",
        email: "",
        password: "",
      });
  
      if (data.name && data.email && data.password) {
        alert("Register successfull!");
        navigate("/home");
      } else {
        alert("You most to complete the info");
      }
    }).catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-full h-screen font-D-DIN">
      <form className="bg-slate-100 p-10 rounded-sm text-[#484848]">
        <div>
          <h1 className="font-bold text-2xl text-[#484848] text-center">
            Crear cuenta
          </h1>
          <br />
          <div>
            <div className="flex flex-col items-center justify-center">
              <div>
                {/* <label>Name: </label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={input.name}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black rounded-sm"
                />
                {error.name && <p>{error.name}</p>}
              </div>
              <br></br>
              <div>
                {/* <label >Email: </label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black rounded-sm"
                />
                {error.email && <p>{error.email}</p>}
              </div>
              <br></br>
              <div>
                {/* <label >Password: </label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={(e) => handleInput(e)}
                  className="bg-white text-black rounded-sm"
                />
                {error.password && <p>{error.password}</p>}
              </div>
              <br></br>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {!error.name && !error.email && !error.phone && !error.password ? (
              <button
                onClick={(e) => handleSubmit(e)}
                className="flex-none rounded-sm bg-nintendo p-1 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Registrar
              </button>
            ) : null}
            <Link to="/login">
              <button className="flex-none rounded-sm bg-nintendo p-1 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Ingresar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
