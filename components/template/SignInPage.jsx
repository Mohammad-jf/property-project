"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const SignInPage = () => {
  const router = useRouter();
  const { data } = useSession();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const res = await signIn("credentials", { ...formData, redirect: false });
    if (!res.error) {
      router.replace("/");
      setIsLoading(false);
    } else {
      toast.error(res.error);
      setIsLoading(false);
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
          className="mb-10 focus:outline-none w-[250px] border
           border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
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
          className="mb-10 focus:outline-none w-[250px] border
           border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />
        <div className="flex justify-center">
          {isLoading ? (
            <ThreeDots
              color="#304ffe"
              height={45}
              ariaLabel="three-dotss-loading"
              visible={true}
              wrapperStyle={{ margin: "auto" }}
            />
          ) : (
            <button
              className="border-none w-full bg-blue-500 text-white
               text-xl font-normal rounded-lg transition-all ease-in 
               cursor-pointer py-2 hover:transform hover:scale-105"
              type="submit"
              onClick={submitHandler}
            >
              Login
            </button>
          )}
        </div>
      </form>
      <p className="text-gray-500 text-base">
        Don't you Have an Account ?
        <Link className="text-blue-500 mr-2" href="/signup">
          {" "}
          Register
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
