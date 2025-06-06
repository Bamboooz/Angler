import { useState } from "react";
import Navigation from "./components/Navigation";
import Resources from "./components/Resources";

export default function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-end">
      <Resources />

      <Navigation page={page} setPage={setPage} />
    </div>
  );
}
