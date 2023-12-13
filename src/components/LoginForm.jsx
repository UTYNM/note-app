import React from 'react';

function LoginForm({ login }) {
    const [usernameValue, setUsernameValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");
    function handleUsernameChange(event) {
        setUsernameValue(event.target.value);
    }
    function handlePasswordChange(event) {
        setPasswordValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        login({ username: usernameValue, password: passwordValue });
    }
    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    value={usernameValue}
                    onChange={handleUsernameChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;