import React from "react";
import { Login } from "../login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Register } from "../login/register";
import { Dashboard } from "../pages/hosteller/dashboard";
import { Profile } from "../pages/hosteller/profile";
import { Room } from "../pages/hosteller/room";
import { Complaint } from "../pages/hosteller/complaint";

// Admin pages

import { AdminDashboard } from "../pages/admin/DashboardAdmin";
import { HostellerAdmin } from "../pages/admin/HostellerAdmin";
import { AddHostellerAdmin } from "../pages/admin/AddHostellerAdmin";
import { RoomAdmin } from "../pages/admin/RoomAdmin";
import { ComplaintAdmin } from "../pages/admin/ComplaintAdmin";
import { UserAdmin } from "../pages/admin/UserAdmin";
import { ViewHostellerAdmin } from "../pages/admin/ViewHostellerAdmin";

// Manager Pages

import { DashboardManager } from "../pages/manager/DashboardManager";
import Managerheader from "../layout/header/managerheader";
import { ComplaintManager } from "../pages/manager/ComplaintManager";
import { RoomManager } from "../pages/manager/RoomManager";
import { RoomDetailManager } from "../pages/manager/RoomDetailManager";
import { HostellerRoomManager } from "../pages/manager/HostellerRoomManager";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routerList.map((route, i) => (
          <Route exact key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const routerList = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/complaint",
    element: <Complaint />,
  },
  {
    path: "/user/room",
    element: <Room />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/hosteller",
    element: <HostellerAdmin />,
  },
  {
    path: "/admin/hosteller/details",
    element: <ViewHostellerAdmin />,
  },
  {
    path: "/admin/hosteller/Add",
    element: <AddHostellerAdmin />,
  },
  {
    path: "/admin/complaint",
    element: <ComplaintAdmin />,
  },
  {
    path: "/admin/room",
    element: <RoomAdmin />,
  },
  {
    path: "/admin/users",
    element: <UserAdmin />,
  },
  {
    path: "/manager/dashboard",
    element: <DashboardManager />,
  },
  {
    path: "/manager/complaint",
    element: <ComplaintManager />,
  },
  {
    path: "/manager/room",
    element: <RoomManager />,
  },
  {
    path: "/manager/room/details",
    element: <RoomDetailManager />,
  },
  {
    path: "/manager/room/new",
    element: <HostellerRoomManager />,
  },
];

export default Router;
