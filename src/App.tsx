import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// @ts-ignore
import Register from './pages/Register.jsx';
// @ts-ignore
import Maps from './pages/Maps.jsx';
// @ts-ignore
import Login from './pages/Login.jsx';
// @ts-ignore
import Authpage from './pages/Authpage.jsx';
// @ts-ignore
import Manager from "./components/Secondary/Manager.jsx";
// @ts-ignore
import Layout from "./components/Secondary/Layout.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 1. The Landing Page (Master Project) */}
          <Route path="/" element={<Index />} />

          {/* 2. The Login Page - MUST be separate from dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/register" element={<Register />} />

          {/* 3. The Dashboard (Protected Area) */}
          {/* We wrap Manager inside Layout because the original router did that */}
          <Route 
            path="/dashboard" 
            element={
              <Layout>
                <Manager />
              </Layout>
            } 
          />

          {/* 4. The Maps Page */}
          <Route 
            path="/maps" 
            element={
              <Layout>
                <Maps />
              </Layout>
            } 
          />

          {/* Catch-all for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;