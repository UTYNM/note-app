import React from 'react';
import LoginForm from '../components/LoginForm';
import { login } from '../utils/network'; // Update the path as per your file structure
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSuccessfulLogin = async ({ accessToken }) => {
    console.log('Successful login. Access Token:', accessToken);
    navigate('/home');
  };


  const handleLogin = async ({ username, password }) => {
    const { error, msg, data } = await login({ username, password });

    if (error) {
      console.log('Login error:', msg);
      return;
    }

    const accessToken = data?.token;

    if (accessToken) {
      handleSuccessfulLogin({ accessToken });
    } else {
      console.log('Access Token not found in response data:', data);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm login={handleLogin} />
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account yet?{' '}
          <a
            href="register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export { LoginPage };
