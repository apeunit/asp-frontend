import { fetchTour } from "@/services/pickupApi"
import { ReactNode, useEffect, useState } from "react"

import { Text } from "@radix-ui/themes"

// import Image from "next/image"

// import styles from "../../../tours/[flightNo]/[tourId]/Tour.module.css";
import "@/views/app/tours/Tour.module.css"
import { Time } from "@/components/shared/Icons/Icons"
import { getStatusColor } from "@/lib/utils"
import classNames from "classnames"
import { useParams } from "react-router-dom"

const Header = ({ children }: { children: ReactNode }) => {
  const params = useParams()
  const { flightNo, tourId } = params
  const [tour, setTour] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTour(flightNo, tourId)
      setTour(data)
    }

    fetchData()
  }, [])

  if (!tour) return null

  const tourStartDateTime = new Date(tour.abfahrtzeit)
  const statusColor = getStatusColor(tour.status)

  return (
    <>
      <div className={classNames("header", statusColor)}>
        <div className={"titleContainer"}>
          {tour.logo && (
            <div className={"logo"}>
              <img src={`/backend/storage/${tour.logo}`} width="31" height="19" alt="" />
            </div>
          )}
          <h1 className={"title"}>{flightNo}</h1>
        </div>
        {tourStartDateTime && (
          <Text size="4" className={"dateAndTime"}>
            <Time />
            <span>{tourStartDateTime.toLocaleString("en-EN")}</span>
          </Text>
        )}

        {tour.status && (
          <Text size="3" className={"status"}>
            Status: {tour.status}
          </Text>
        )}
      </div>
      {children}
    </>
  )
}

export default Header
