import Navigation from "../Navigation";
import { cn } from "../../utils";
import { useNavigate } from "react-router";

interface PageReturnableProps {
  name: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageReturnable({ name, className, children }: PageReturnableProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-30 flex gap-6 border-b border-gray">
        <button onClick={() => navigate(-1)}>
          abc
        </button>

        {name}
      </div>

      <div className={cn("w-full h-full flex flex-col", className)}>
        {children}
        <Navigation />
      </div>
    </div>
  );
}
