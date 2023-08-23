"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }: { children: JSX.Element }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
