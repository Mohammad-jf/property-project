"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const SubmitMessageButton = () => {
  const status = useFormStatus();

  return (
    <div className='flex justify-center'>
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
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
          type="submit"
        >
          <FaPaperPlane className="mr-2" /> Send Message
        </button>
      )}
    </div>
  );
};

export default SubmitMessageButton;
