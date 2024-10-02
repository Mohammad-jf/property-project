"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ text }) => {
  const status = useFormStatus();

  return (
    <div className="flex justify-center">
      {status.pending ? (
        <ThreeDots
          color="#304ffe"
          height={45}
          ariaLabel="three-dotss-loading"
          visible={true}
          wrapperStyle={{ margin: "auto" }}
        />
      ) : (
        <button
          className="border-none w-full mt-3 bg-blue-500 text-white text-xl font-normal rounded-lg 
          transition-all ease-in cursor-pointer py-2 hover:transform hover:scale-105"
          type="submit"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
