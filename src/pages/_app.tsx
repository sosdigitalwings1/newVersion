// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer />
      <Analytics />
    </ThemeProvider>
  );
}
