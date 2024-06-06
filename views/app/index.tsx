import React from "react"
import { Route } from "react-router"
import Tour from "@/views/app/tours"
import AppLayout from "@/views/app/layout"
import Dashboard from "@/views/app/dashboard"
import TourHeader from "@/views/app/headers/TourHeader"
import DashboardHeader from "@/views/app/headers/DashboardHeader"

const AppRoute = () => {
  return (
    <AppLayout>
      <Route
        path="/:flightNo/:tourId"
        element={
          <TourHeader>
            <Tour />
          </TourHeader>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardHeader>
            <Dashboard />
          </DashboardHeader>
        }
      />
    </AppLayout>
  )
}

export default AppRoute
