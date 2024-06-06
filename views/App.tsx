import React from "react"
import RootLayout from "./layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import AppRoute from "./app"
import Home from "./Home"
import TourHeader from "./app/headers/TourHeader"
import Tour from "./app/tours"
import Dashboard from "./app/dashboard"
import DashboardHeader from "./app/headers/DashboardHeader"
import AppLayout from "./app/layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <RootLayout> */}
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
              <AppLayout>
                <TourHeader>
                  <Tour />
                </TourHeader>
              </AppLayout>
            </RootLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RootLayout>
              <AppLayout>
                <DashboardHeader>
                  <Dashboard />
                </DashboardHeader>
              </AppLayout>
            </RootLayout>
          }
        />
        {/* </RootLayout> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
