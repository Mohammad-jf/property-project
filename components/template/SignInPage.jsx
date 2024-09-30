"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();
  const { data } = useSession();
  if (data) {
    router.replace("/");
  }
  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("invalid credentials");
      return;
    }
    const res = await signIn("credentials", { ...formData, redirect: false });
    if (!res.error) {
      router.replace("/");
    } else {
      toast.error(res.error);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-blue-500 font-semibold text-3xl mb-3">Login</h4>
      <form className="flex flex-col max-w-[700px] p-[40px] rounded-xl mb-8 shadow-xl border">
        <label htmlFor="email" className="text-blue-500 mb-3 font-normal">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          placeholder="email"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />

        <label className="text-blue-500 mb-3 font-normal" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          name="password"
          placeholder="password"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />

        <button
          className=" border-none bg-blue-500 text-white text-xl font-normal rounded-md transition-all ease-in cursor-pointer py-2 hover:transform hover:scale-105"
          type="submit"
          onClick={submitHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
