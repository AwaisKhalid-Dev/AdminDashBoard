import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoutes";

import DefaultLayout from "../Layouts/DefaultLayout";
import PanelLayout from "../Layouts/PanelLayout";

const dashboard = lazy(() => import("../Pages/Dashboard"));
const autherList = lazy(() => import("../Pages/AutherList"));
const Login = lazy(() => import("../Pages/Login"));
const ScanQR = lazy(() => import("../Pages/ScanQR"));



function RoutesComponent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/adminDashboard"
            element={
              <PrivateRoute component={dashboard} layout={PanelLayout} />
            }
          />
           <Route
            path="/"
            element={
              <PrivateRoute component={Login} layout={DefaultLayout}  />
            }
          />
           <Route
            path="/scanqr"
            element={
              <PrivateRoute component={ScanQR} layout={DefaultLayout}  />
            }
          />
          {/* <Route
            path="/autherList"
            element={
              <PrivateRoute component={autherList} layout={PanelLayout} />
            }
          /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
