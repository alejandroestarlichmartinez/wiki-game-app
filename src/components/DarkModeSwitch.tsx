"use client";
// React amd Next
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
// Icons
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
     document.documentElement.setAttribute("data-theme", currentTheme as string);
  }, [theme])
  

  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  )
}
