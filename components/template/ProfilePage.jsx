import Image from "next/image";
import ProfileProperty from "../modules/ProfileProperty";
import profileDefault from "../../assets/images/profile.png";

const ProfilePage = ({ user, properties }) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-start">
            Your Profile
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 m-0 md:mx-20 mt-10 mb-6">
              <div className="mb-4 flex justify-center items-center md:justify-start md:items-start ">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full md:mx-0 "
                  src={profileDefault}
                  alt="User"
                  width={200}
                  height={200}
                />
              </div>

              <h2 className="text-2xl mb-4 text-center md:text-start ">
                <span className="font-bold block">Name: </span> {user.name}
              </h2>
              <h2 className="text-2xl mb-4 text-center md:text-start ">
                <span className="font-bold block">Email: </span> {user.email}
              </h2>
            </div>

            <div className="md:w-2/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-6 text-center md:text-start">
                Your Listings
              </h2>
              {properties.length !== 0
                ? properties.map((property) => (
                    <ProfileProperty
                      key={property._id}
                      property={JSON.parse(JSON.stringify(property))}
                    />
                  ))
                : "There Is No Properties"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
