import React from "react"
import RootLayout from "./layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import TourHeader from "./app/headers/TourHeader"
import Tour from "./app/tours"
import Dashboard from "./app/dashboard"
import DashboardHeader from "./app/headers/DashboardHeader"
import AppLayout from "./app/layout"
import Login from "./auth/login/page"
import AuthLayout from "./auth/layout"
import NotFoundPage from "./not-found"
import LoginWithPassword from "./auth/login-with-password/page"
import Register from "@/views/auth/register"
import ForgotPassword from "@/views/auth/forgot-password"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RootLayout>
              <AuthLayout>
                <Login />
              </AuthLayout>
            </RootLayout>
          }
        />

        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />

        <Route
          path="/:flightNo/:tourId"
          element={
            <RootLayout>
              <AppLayout
                header={
                  <TourHeader>
                    <></>
                  </TourHeader>
                }
              >
                <Tour />
              </AppLayout>
            </RootLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RootLayout>
              <AppLayout
                header={
                  <DashboardHeader>
                    <></>
                  </DashboardHeader>
                }
              >
                <Dashboard />
              </AppLayout>
            </RootLayout>
          }
        />

        <Route
          path="/login-with-password"
          element={
            <RootLayout>
              <AuthLayout>
                <LoginWithPassword />
              </AuthLayout>
            </RootLayout>
          }
        />

        <Route
          path="/register"
          element={
            <RootLayout>
              <AuthLayout>
                <Register />
              </AuthLayout>
            </RootLayout>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <RootLayout>
              <AuthLayout>
                <ForgotPassword />
              </AuthLayout>
            </RootLayout>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
