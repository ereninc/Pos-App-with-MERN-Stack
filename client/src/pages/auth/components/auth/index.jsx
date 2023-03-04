import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../components/header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
