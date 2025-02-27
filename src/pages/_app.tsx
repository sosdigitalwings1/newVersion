// // pages/_app.tsx
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Analytics } from "@vercel/analytics/react";
// import { ThemeProvider } from "context/ThemeProvider";
// import { CartProvider } from "context/CartContext"; // Import CartProvider

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <CartProvider> {/* Wrap with CartProvider */}
//         <Component {...pageProps} />
//       </CartProvider>
//       <ToastContainer />
//       <Analytics />
//     </ThemeProvider>
//   );
// }

// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "context/ThemeProvider";
import { CartProvider } from "context/CartContext"; // Import CartProvider
import { WishlistProvider } from "context/WishlistContext"; // Import WishlistProvider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        {" "}
        {/* Wrap with CartProvider */}
        <WishlistProvider>
          <Component {...pageProps} />
        </WishlistProvider>
      </CartProvider>
      <ToastContainer />
      <Analytics />
    </ThemeProvider>
  );
}
