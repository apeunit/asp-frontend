import { useAuth } from "../../hooks/auth"
import Loading from "./Loading"

import styles from "./Layout.module.css"
import Header from "@/components/shared/Header/Header"

const AppLayout = ({ children, header }: any) => {
  const { user } = useAuth({ middleware: "auth" })

  if (!user) {
    return <Loading />
  }

  return (
    <div className={styles.container}>
      <Header>{header}</Header>
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
