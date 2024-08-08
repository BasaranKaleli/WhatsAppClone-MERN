import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firbase";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      dispatch({ type: "LOGIN", payload: user });
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="text-center">
          <img
            className="mx-auto h-24 w-auto drop-shadow-md"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt="WhatsApp"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
            WhatsApp'a Hoş Geldiniz
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Hesabınıza giriş yapın ve sohbete başlayın
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={signInGoogle}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-green-500 group-hover:text-green-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </span>
            Google ile Giriş Yap
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Giriş yaparak, WhatsApp'ın{" "}
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Kullanım Şartları
            </a>{" "}
            ve{" "}
            <a
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Gizlilik Politikası
            </a>
            'nı kabul etmiş olursunuz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
