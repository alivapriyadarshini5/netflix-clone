import React from "react";
import Input from "../components/input";
const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                label="Username"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              First time using NetFlix?
              <span className="text-white ml-1 cursor-pointer hover:underline">
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
