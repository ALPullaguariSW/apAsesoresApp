import React from "react";

function LoginForm() {
  return (
    <div className="bg-white p-24 rounded shadow-2xl">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-azul-ap font-semibold"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block w-full rounded-md shadow-xl focus:border-azul-ap "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-azul-ap focus:ring focus:ring-azul-ap focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="bg-azul-ap text-white py-2 px-4 rounded hover:bg-sol-ap focus:outline-none focus:ring focus:ring-azul-ap focus:ring-opacity-50"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
