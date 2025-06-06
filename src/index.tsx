import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Catches from "./app/catches";
import Map from "./app/map";
import Statistics from "./app/statistics";
import Resources from "./app/resources";
import Species from "./app/resources/species";
import SpeciesDetail from "./app/resources/species/[species]";
import Knots from "./app/resources/knots";
import KnotsDetail from "./app/resources/knots/[knot]";
import Rigs from "./app/resources/rigs";
import RigsDetail from "./app/resources/rigs/[rig]";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catches />} />
        <Route path="/map" element={<Map />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/resources" element={<Resources />}>
          <Route path="/species" element={<Species />}>
            <Route path="/:species" element={<SpeciesDetail />} />
          </Route>
          <Route path="/knots" element={<Knots />}>
            <Route path="/:knot" element={<KnotsDetail />} />
          </Route>
          <Route path="/rigs" element={<Rigs />}>
            <Route path="/:rig" element={<RigsDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
