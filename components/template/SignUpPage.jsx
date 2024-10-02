"use client";
import Link from "next/link";
import signUp from "../../actions/signUp";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useFormStatus } from "react-dom";
import SubmitButton from "../modules/SubmitButton";

const SignUpPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session || session?.user) router.replace("/signin");
  const status = useFormStatus();
  const signupAction = async (formData) => {
    signUp(formData).then((res) => {
      if (res?.error) toast.error(res?.error);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-blue-500 font-semibold text-3xl mb-3">Sign Up</h4>
      <form
        action={signupAction}
        className="flex flex-col max-w-[700px] p-[40px] rounded-xl mb-8 shadow-xl border"
      >
        <label htmlFor="name" className="text-blue-500 mb-3 font-normal">
          Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />
        <label htmlFor="email" className="text-blue-500 mb-3 font-normal">
          Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />

        <label className="text-blue-500 mb-3 font-normal" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />
        <label className="text-blue-500 mb-3 font-normal" htmlFor="rePassword">
          repeat password:
        </label>
        <input
          type="password"
          name="rePassword"
          placeholder="repeat password"
          className="mb-10 focus:outline-none w-[250px] border border-blue-500 text-gray-500 rounded-md p-3 text-base h-10"
        />
        <SubmitButton text="Sign up" />
      </form>
      <p className="text-gray-500 text-base">
        Do you Have an Account ?
        <Link className="text-blue-500 mr-2" href="/signin">
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
