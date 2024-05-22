import React from "react";
import AppRoutes from "AppRoutes";
import useScrollTop from "hooks/useScrollTop";

export default function App() {
  useScrollTop();

  return (
    <>
      <AppRoutes />
    </>
  );
}
