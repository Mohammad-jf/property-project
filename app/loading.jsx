"use client";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  const overRide = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={overRide}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
