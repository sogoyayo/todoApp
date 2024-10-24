import { TrophyIcon } from "./trophy-icon";

export const ProUpgradeCard = () => {
  return (
    <div className="relative border-2 border-[#9EB031] bg-[#CDE53D] px-10 py-12 flex items-center justify-between shadow-lg w-full">
      <div className="flex items-center space-x-4">
        <TrophyIcon />

        <h3 className="text-2xl font-semibold text-[#071D55]">Go Pro Upgrade Now</h3>
      </div>

      <div className="absolute top-0 right-10 bg-[#071D55] text-yellow-400 py-6 px-6">
        $1
      </div>
    </div>
  );
};
