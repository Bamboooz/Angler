import Navigation from "../Navigation";
import { cn } from "../../utils";

interface PageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Page({ className, children }: PageProps) {
  return (
    <div className={cn("w-full h-full flex flex-col", className)}>
      {children}
      <Navigation />
    </div>
  );
}
