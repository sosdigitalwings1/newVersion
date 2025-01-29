"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
  attribute?: string;
  enableSystem?: boolean;
  forcedTheme?: string;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ProviderProps): JSX.Element {
  return (
    <NextThemesProvider {...props} attribute="class">
      {children}
    </NextThemesProvider>
  );
}
