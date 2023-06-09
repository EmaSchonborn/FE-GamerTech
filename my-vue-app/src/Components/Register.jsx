import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser, sendEmail, verifyUser } from "../Redux/actions.js";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
// import style from "./Register.module.css";

export default function CreateUser() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "¡Debes poner tu nombre!.";
    }
    if (!/^[A-Za-z\s]+$/.test(input.name)) {
      errors.name = "¡Solo letras y espacios!";
    }
    if (!input.password) {
      errors.password = "¡Debes seleccionar una contraseña!";
    }
    if (!input.email) {
      errors.email = "¡Debes seleccionar un mail valido!";
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
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((dataFirebase) => {
        console.log(dataFirebase);
        dispatch(createUser(data));
        const dataEmail = { email: data.email };
        dispatch(sendEmail(dataEmail));
        setInput({
          name: "",
          email: "",
          password: "",
        });

        /*

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        dispatch(verifyUser(email, password));
        setError(false);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }; */

        if (data.name && data.email && data.password) {
          signInWithEmailAndPassword(auth, input.email, input.password).then((data) => {
            console.log(data);
            dispatch(verifyUser(input.email, input.password));
            setError(false);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '¡Bienvenido!',
              showConfirmButton: false,
              timer: 1500
            })
            navigate("/home");
          });
        } else {
          Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: '¡Debes completar toda la informacion!',
        showConfirmButton: false,
        timer: 1500
      });
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
