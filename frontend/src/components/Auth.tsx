import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@saketsingh0078/blogs";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Spinner } from "./Spinner";

//trpc
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();

  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );

      const jwt = response?.data;
      if (jwt === null) {
        <Spinner />;
      }
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //alert the user here that the request failed
      alert("Incorrect Input!");
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center ">
        <div className="border border-slate-100 rounded-sm p-5">
          <div className="px-10">
            <div className="font-bold text-3xl ">Create an account</div>
            <div className="text-slate-400 text-sm px-3 pb-4">
              {type === "signin"
                ? "Don't have an account"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setpostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label=" Email"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Example@123"
              onChange={(e) => {
                setpostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button
            onClick={sendRequest}
            className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className=" text-sm font-medium text-slate-700 ">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className=" w-full border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block p-2 mt-2 mb-2"
        placeholder={placeholder}
      />
    </div>
  );
}
