import { useAuth } from "@/hooks/auth"
import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const { user } = useAuth({ middleware: "auth" })
  const navigate = useNavigate()

  useLayoutEffect(() => {
    console.log({ user })
    // if (user) return navigate("/dashboard")
  }, [user])

  return null
}

export default Home
