// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "context/ThemeProvider";
import { CartProvider } from "context/CartContext"; // Import CartProvider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider> {/* Wrap with CartProvider */}
        <Component {...pageProps} />
      </CartProvider>
      <ToastContainer />
      <Analytics />
    </ThemeProvider>
  );
}