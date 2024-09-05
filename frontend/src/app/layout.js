import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from './context/AuthContext.js'
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Putko",
  description: "Hotel and Apartment Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthContextProvider>
        {/* <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false} /> */}
          {/* <Header/> */}
            {children}
          <Footer/>
          </AuthContextProvider>
      </body>
      
    </html>
  );
}
