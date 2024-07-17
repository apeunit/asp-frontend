import { fetchTour } from "@/services/pickupApi"
import { ReactNode, useEffect, useState } from "react"

import { Text } from "@radix-ui/themes"
import styles from "@/views/app/tours/Tour.module.css"
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
      <div className={classNames(styles.header, styles[statusColor])}>
        <div className={styles.titleContainer}>
          {tour.logo && (
            <div className={styles.logo}>
              <img src={`/backend/storage/${tour.logo}`} width="31" height="19" alt="" />
            </div>
          )}
          <h1 className={styles.title}>{flightNo}</h1>
        </div>
        {tourStartDateTime && (
          <Text size="4" className={styles.dateAndTime}>
            <Time />
            <span>{tourStartDateTime.toLocaleString("en-EN")}</span>
          </Text>
        )}

        {tour.status && (
          <Text size="3" className={styles.status}>
            Status: {tour.status}
          </Text>
        )}
      </div>
      {children}
    </>
  )
}

export default Header
