import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoutes";

import DefaultLayout from "../Layouts/DefaultLayout";
import PanelLayout from "../Layouts/PanelLayout";

const dashboard = lazy(() => import("../Pages/Dashboard"));
const autherList = lazy(() => import("../Pages/AutherList"));

function RoutesComponent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute component={dashboard} layout={PanelLayout} />
            }
          />
          <Route
            path="/autherList"
            element={
              <PrivateRoute component={autherList} layout={PanelLayout} />
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
