import Link from "next/link";

const InfoBox = ({ title, desc, linkText, bgColor, buttonColor }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{desc}</p>
      <Link
        href="/properties"
        className={`inline-block ${buttonColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default InfoBox;
