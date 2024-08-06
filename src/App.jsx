// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import Staff from "./pages/Staff";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/doctor/*" element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <Doctor />
              </ProtectedRoute>
            } />
            <Route path="/staff/*" element={
              <ProtectedRoute allowedRoles={['staff']}>
                <Staff />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
