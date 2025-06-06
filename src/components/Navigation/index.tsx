import { GiFishingHook } from "react-icons/gi";
import { LuAlignEndHorizontal, LuCompass, LuMap } from "react-icons/lu";
import NavigationButton from "./NavigationButton";

interface NavigationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Navigation({ page, setPage }: NavigationProps) {
  return (
    <div className="fixed w-full h-20 px-6 bottom-2">
      <div className="w-full h-full flex rounded-2xl shadow-circular px-4 z-50">
        <NavigationButton
          id={0}
          icon={<GiFishingHook />}
          label="Catches"
          page={page}
          setPage={setPage}
        />
        <NavigationButton
          id={1}
          icon={<LuCompass />}
          label="Map"
          page={page}
          setPage={setPage}
        />
        <NavigationButton
          id={2}
          icon={<LuMap />}
          label="Resources"
          page={page}
          setPage={setPage}
        />
        <NavigationButton
          id={3}
          icon={<LuAlignEndHorizontal />}
          label="Statistics"
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
