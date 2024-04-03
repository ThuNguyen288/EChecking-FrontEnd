import React from "react";
import title from "../image/title.png";
import { useNavigate } from 'react-router-dom';

export const LoginLecturer = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/'); // Replace '/new-route' with your actual route path
    };
  
    return (
      <div className="w-screen mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center bg-bg1 bg-no-repeat bg-cover bg-x items-center">
        <div className="sm:mx-auto">
          <img className="mx-auto h-25 w-auto" src={title} alt="E-Checking" />
        </div>
        <div className="m-20 sm:mx-auto sm:w-full sm:max-w-sm w-full bg-white rounded-lg shadow dark:border-4 sm:max-w-md p-10">
         <div className="flex justify-between">
         <h2 className="text-2xl font-thin leading-9 tracking-tight text-gray-900 mb-10 font-bold text-center w-1/2 hover:underline hover:text-3xl" onClick={handleClick}>
            Student
          </h2>
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10 font-bold text-center w-1/2">
            |
          </h2>
         <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10 font-bold text-center w-1/2 hover:text-3xl">
            Lecturer
          </h2>
         </div>
          <h3 className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            Sign in to your account
          </h3>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-sky-500 hover:text-sky-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
