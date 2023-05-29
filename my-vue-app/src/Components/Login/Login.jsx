import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../../Redux/actions";
import { useEffect } from "react";

const Login = () => {
  /* const clientId =
    "688737799752-2da6ig385v5aljm0fvjtisv2qtlbuqlb.apps.googleusercontent.com"; */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyUser(email, password));
    navigate("/home");
  };

  const userCreated=useSelector(state=>state.userCreated)
  console.log(userCreated);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("marcaTiempoLogin", Date.now());
  }, [])
  

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-indigo-600 flex rounded-md shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-white">Ingresar</h2>
          <p className="text-xs mt-4 text-white">
            Si ya eres miembro, inicia sesión fácilmente.
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-md border bg-gray-50 text-[#002D74]"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => handleEmailChange(e)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-md border w-full bg-gray-50 text-[#002D74]"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => handlePasswordChange(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300"
              >
                Ingresar
              </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-5 text-sm border-b border-[#002D74] py-4 text-white">
            <Link to="#">¿Olvidaste tu contraseña?</Link>
          </div>

          <div className="mt-3 text-sm flex justify-between items-center text-white">
            <p>¿No tienes una cuenta?</p>
            <Link
              to="/register"
              className="py-2 px-5 bg-white text-black border rounded-md hover:scale-110 duration-300"
            >
              Crear cuenta
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-md"
            src="https://png.pngtree.com/background/20210711/original/pngtree-simple-atmosphere-recruitment-creative-poster-picture-image_1094022.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
