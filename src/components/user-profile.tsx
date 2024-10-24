import ProfileImage from "@/assets/images/user-profile.jpg";

export const UserProfile = () => {
  return (
    <div className="bg-[#3556AB] px-6 h-44 flex items-center">
      <div className="flex items-start space-x-4 md:space-x-6 lg:space-x-8">
        <div className="size-10 md:size-12 lg:size-16 rounded-full overflow-hidden border-4 border-white">
          <img
            src={ProfileImage}
            alt={`${name}'s profile`}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-white flex flex-col gap-3">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">Hello, John</h1>

          <p className="text-sm md:text-lg lg:text-3xl italic font-thin">
            What are your plans for today?
          </p>
        </div>
      </div>
    </div>
  );
};
