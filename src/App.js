import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import PageNotFound from "./pages/PageNotFound";
import MyPortfolio from "./pages/MyPortfolio";

import PortfolioProjectDetails from "./features/portfolio/PortfolioProjectDetails";

import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contactme" element={<ContactMe />} />
            <Route path="/portfolio" element={<MyPortfolio />} />
            <Route path="/project/:id" element={<PortfolioProjectDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            marginTop: "100px",
            padding: "16px 24px",
            backgroundColor: "var(--dl-color-scheme-blue)",
            color: "var(--dl-color-scheme-white)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
