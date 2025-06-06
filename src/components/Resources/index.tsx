import { GiFishingHook, GiSlipknot } from "react-icons/gi";
import { LuFish } from "react-icons/lu";

export default function Resources() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-6">
      <div className="w-full h-20 flex items-center px-6 gap-3 bg-light-gray rounded-2xl">
        <LuFish />
        Species
      </div>

      <div className="w-full h-20 flex items-center px-6 gap-3 bg-light-gray rounded-2xl">
        <GiSlipknot />
        Knots
      </div>

      <div className="w-full h-20 flex items-center px-6 gap-3 bg-light-gray rounded-2xl">
        <GiFishingHook />
        Rigs
      </div>
    </div>
  );
}
