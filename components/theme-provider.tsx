"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggleWrapper>{children}</ThemeToggleWrapper>
    </NextThemesProvider>
  );
}

function ThemeToggleWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {children}
    </>
  );
}