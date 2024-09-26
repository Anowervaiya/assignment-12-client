import { useForm } from 'react-hook-form';

import { useContext, useState } from 'react';

import { FaEye } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation()
 
  const { user, GoogleLogin, SingInUser } = useAuth();

  const [passwordError, setPasswordError] = useState(null); //
  const [eye, setEye] = useState(false);

  const handleForm = async data => {
    const email = data.email;
    const password = data.password;

    try {
      await SingInUser(email, password);
      toast.success('user Login Successfully');
      navigate(`${location?.state?location?.state : '/'}`);
      setPasswordError('');
      reset();
    } catch (err) {
      setPasswordError(err.message);
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await GoogleLogin();
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      };
      toast.success('login successfull');

    
      navigate(`${location?.state ? location?.state : '/'}`);

      await AxiosSecure.put('/all-user', userInfo);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 ">
      <div
        className="flex w-full border  
      
    
       max-w-xl m-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl"
      >
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${'https://i.ibb.co/JQMLtBC/SignIn.jpg'})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <form onSubmit={handleSubmit(handleForm)}>
            Email:
            <input
              type="email"
              {...register('email')}
              className="border p-3 rounded-lg w-full "
            />
            Password:
            <div className="relative">
              <input
                type={eye ? 'text' : 'password'}
                {...register('password', { required: true })}
                className="border p-3 rounded-lg w-full "
              />
              <div
                onClick={() => {
                  setEye(!eye);
                }}
                className="absolute top-4 right-5"
              >
                <FaEye />
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 font-bold">{passwordError}</p>
            )}
            <input
              type="submit"
              value={'Sign In'}
              className=" h-12 cursor-pointer flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border hover:border-orange-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 "
            />
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b    lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase    hover:underline"
            >
              or Sign In with
            </a>

            <span className="w-1/5 border-b    lg:w-1/4"></span>
          </div>
          {/* sign in with facebook  */}
          <button className="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border hover:border-orange-300 rounded-lg     hover:bg-gray-50 hover:text-orange-600  ">
            <div className="px-4 py-2">
              <IoLogoFacebook className="w-8 text-blue-600 h-7" />
            </div>

            <span className="w-5/6  px-4 py-3 font-bold text-center">
              Sign in with Facebook
            </span>
          </button>

          {/* sign in with google  */}
          <button
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border hover:border-orange-300 rounded-lg    hover:bg-gray-50 hover:text-orange-600    "
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6  px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b   md:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-gray-500 uppercase    hover:underline"
            >
              or sign In
            </a>

            <span className="w-1/5 border-b   md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
