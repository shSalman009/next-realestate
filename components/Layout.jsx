import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <style jsx>{`
        .main {
          margin-top: 72px;
        }
      `}</style>

      <Navbar />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
