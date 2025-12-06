import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Auth({setUserData}) 
{
  let navigate = useNavigate();

  if(localStorage.getItem("user"))
  {
    navigate("/");
  }

    async function handleSignUp(e) 
    {
        e.preventDefault();

        let data = {
            fullName: e.target[0].value,
            avatar: e.target[1].value,
            username: e.target[2].value,
            email: e.target[2].value,
            password: e.target[3].value,
        }

        console.log(data);

        try {
            let response = await axios.post("http://localhost:8000/api/user/register", data);
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setUserData(response.data.user);
            navigate("/")
        } catch (error) {
            console.log(error);
        }   
    }

    async function handleLogin(e)
    {
        e.preventDefault();

        let data = {
            email: e.target[0].value,
            password: e.target[1].value,
        }

        console.log(data);

        try {
            let response = await axios.post("http://localhost:8000/api/user/login", data);
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setUserData(response.data.user);
            navigate("/")

        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8">
        <Tabs>
          <TabList className="flex gap-4 items-center justify-center p-5">
            <Tab
              className="px-6 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer 
                         hover:bg-indigo-500 transition-all"
              selectedClassName="bg-indigo-600"
            >
              Login
            </Tab>

            <Tab
              className="px-6 py-2 rounded-2xl bg-indigo-400 text-white cursor-pointer 
                         hover:bg-indigo-500 transition-all"
              selectedClassName="bg-indigo-600"
            >
              SignUp
            </Tab>
          </TabList>

          {/* LOGIN PANEL */}
          <TabPanel>
            <div className="text-center mb-6">
              <h3 className="text-4xl font-semibold text-indigo-600">Login</h3>
            </div>

            <form onSubmit={handleLogin}  className="flex flex-col gap-5 w-full max-w-md mx-auto">
              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Password</p>
                <input
                  type="password"
                  placeholder="password"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-all"
              >
                Login
              </button>
            </form>
          </TabPanel>

          {/* SIGNUP PANEL */}
          <TabPanel>
            <div className="text-center mb-6">
              <h3 className="text-4xl font-semibold text-indigo-600">
                Sign Up
              </h3>
            </div>

            <form onSubmit={handleSignUp}  className="flex flex-col gap-5 w-full max-w-md mx-auto">
              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Full Name</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Avatar</p>
                <input
                  type="text"
                  placeholder="Avatar"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-700 font-medium">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border rounded-xl focus:border-indigo-500 outline-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-all"
              >
                Sign Up
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
