import React from "react";
import Header from "@components/layout/Header";
import Navigation from "@components/layout/Navigation";
import AppRoutes from "@routes/AppRoutes";
import "./App.css";
import "./i18n/i18n";
import i18n from "i18next";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <AppRoutes />
    </>
  );
}

export default App;
