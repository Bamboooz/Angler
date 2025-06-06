import React from "react";
import { cn } from "../../utils";

interface NavigationButtonProps {
  id: number;
  icon: React.ReactElement;
  label: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function NavigationButton({
  id,
  icon,
  label,
  page,
  setPage,
}: NavigationButtonProps) {
  return (
    <button
      className={cn(
        "w-full h-full flex flex-col items-center justify-center gap-1",
        id === page ? "text-accent" : "text-gray"
      )}
      onClick={() => setPage(id)}
    >
      {React.cloneElement(icon, { className: "text-[18px]" })}
      <p className="text-[12px]">{label}</p>
    </button>
  );
}
