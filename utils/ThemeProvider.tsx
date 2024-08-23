"use client";
import {ThemeProvider as NextThemesProvider} from "next-themes";
export default function ThemeProvider({children, ...props}:Readonly<{children:React.ReactNode}>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
