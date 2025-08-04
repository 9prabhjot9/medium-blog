import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { LabelledInput } from "./LabelledInput"; 
import axios from "axios";
import { BACKEND_URL } from "@/config";




type AuthProps = {
  type: "signup" | "signin";
};


export const Auth = ({ type }: AuthProps) => {
    const navigate = useNavigate()
 const [postInputs, setPostInputs] = useState(
  type === "signup"
    ? { name: "", email: "", password: "" }
    : { email: "", password: "" }
);

  async function sendRequest() {
    try { 
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin" }`, postInputs)
        console.log("Login response", response.data);
        
        localStorage.setItem("token", response.data.jwt)
        navigate("/Blogs")
    }catch (e:any) {
        console.log("Login failed", e.response?.data || e.messag);
        
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInputs({
      ...postInputs,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6">
        <div className="text-4xl font-bold mb-2 text-center">
          {type === "signup" ? "Create an account" : "Welcome back"}
        </div>
        <div className="text-gray-500 text-center mb-6">
          {type === "signup" ? (
            <>
              Already have an account?{" "}
              <Link to="/Signin" className="underline">
                Login
              </Link>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Link to="/Signup" className="underline">
                Sign up
              </Link>
            </>
          )}
        </div>
          {type === "signup" && (
          <LabelledInput
            label="Name"
            name="name"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          )}
        <div className="space-y-2">
          <LabelledInput
            label="Email"
            name="email"
            placeholder="Example@gmail.com"
            onChange={handleChange}
          />
          <LabelledInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <Button
            className="w-full bg-slate-950 text-slate-50 mt-4"
            onClick={sendRequest}
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};