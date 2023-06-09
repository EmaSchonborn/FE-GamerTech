import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser, loginWithGoogle } from "../../Redux/actions";
import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "../../firebase.config";
import { useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  useEffect(() => {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("marcaTiempoLogin", Date.now());
    localStorage.setItem("id", "");
  }, []);

  const handleClickWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        const credential = GoogleAuthProvider.credentialFromResult(data);
        console.log(credential);
        const token = credential.accessToken;
        const uid = data.user.uid;
        console.log(uid);
        const user = getAdditionalUserInfo(data);
        console.log(user);
        if (user.profile.verified_email) {
          dispatch(loginWithGoogle({ userProfile: user.profile, uid: uid }));
          // Guardaremos el token del usuario
          localStorage.setItem("token", token);
          // Una vez validado todos los datos lo mandaremos recien al home con su cuenta logueada
          navigate("/home");
        } else throw new Error("Usuario no validado");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
      });
  };

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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => handlePasswordChange(e)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={showPassword ? "blue" : "gray"}
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                viewBox="0 0 16 16"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <ViewOffIcon boxSize={4} />
                ) : (
                  <ViewIcon boxSize={4} />
                )}
              </svg>
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300"
            >
              Ingresar
            </button>
            {error && (
              <span className="text-red-500 text-2xm">
                Correo o contraseña incorrecto
              </span>
            )}
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button
            onClick={handleClickWithGoogle}
            className="bg-white border py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Ingresar con Google
          </button>

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
