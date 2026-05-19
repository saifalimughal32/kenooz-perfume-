import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import IntroSplash from "@/components/IntroSplash";
import "./styles.css";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Brands from "@/pages/Brands";
import Contact from "@/pages/Contact";
import Manufacturing from "@/pages/Manufacturing";
import PrivateLabel from "@/pages/PrivateLabel";
import Products from "@/pages/Products";
import ScentFinder from "@/pages/ScentFinder";
import { BlogPage } from "@/pages/Stubs";
import NotFound from "@/pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="kenooz-theme"
        disableTransitionOnChange
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/private-label" element={<PrivateLabel />} />
            <Route path="/products" element={<Products />} />
            <Route path="/scent-finder" element={<ScentFinder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
