"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

function Dashboard() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
