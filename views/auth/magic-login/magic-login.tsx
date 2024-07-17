import { useCallback, useEffect } from "react"
import { Heading, Link, Text } from "@radix-ui/themes";
import AuthCard from "../AuthCard/AuthCard";
import styles from "./magic-login.module.css";
import { useParams } from "react-router-dom";
import axios from "@/lib/axios";


export default function MagicLogin() {
  const { user, token } = useParams();

  const sendMagicLink = useCallback( async () => {
    const response = await axios.get(`/magic-login/${user}/${token}`)

    console.log(response)
  
  }, [])

  useEffect(() => {
    sendMagicLink();
  }, [sendMagicLink])
  
  return (
    <div className={styles.container}>
      <AuthCard className={styles.card}>
        <Heading size={"3"} weight={"medium"}>
          Crunching everything together.
        </Heading>
        <Link href={"/login"}>Back to login page</Link>
      </AuthCard>
    </div>
  )
}
